const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const cors = require('cors');
const { upload } = require('./storage');
const { getNoExtFileName } = require('./utils');

const {
  DB_PATH,
  STORAGE_PATH,
  PORT,
  URL,
  CORS_OPTIONS,
} = require('./constants');

const app = express();

app.use(cors(CORS_OPTIONS));

const getDb = async () => JSON.parse(await fs.readFile(DB_PATH));

app.get('/galery', async (_, res) => {
  const data = await getDb();
  return res.json(Object.values(data.galery));
});

app.get('/galery/:id', async ({ params }, res) => {
  const { id } = params;
  const data = await getDb();
  const item = data.galery[id];
  if (!item) {
    console.error(`[GET], galery/${id}: Not found \n`, err);
    return res.status(404).send('Not found');
  }
  return res.status(200).json(item);
});

app.get('/storage/:id', async function (req, res) {
  const dirPath = path.join(STORAGE_PATH, req.params.id);

  const fileName = (await fs.readdir(dirPath))[0];

  res.sendFile(path.join(dirPath, fileName), (err) => {
    if (err) {
      console.error(`[GET] storage/${id}\nNot found \n`, err);
      res.status(404).send('Not found');
    }
  });
});

app.post('/galery', upload.single('image'), async ({ body, file }, res) => {
  const newItem = {
    ...body,
    imageURL: `${URL}/storage/${getNoExtFileName(file.originalname)}`,
  };

  const data = await getDb();
  data.galery[body.id] = newItem;
  await fs
    .writeFile(DB_PATH, JSON.stringify(data))
    .catch((e) => console.error(`[POST] /galery\nbody: ${body}\n`, e));

  res.status(200).json(newItem);
});

app.delete('/galery/:id', async ({ params }, res) => {
  const { id } = params;
  const data = await getDb();
  const item = data.galery[id];

  if (!item) {
    return res.status(204).send('No content');
  }

  const imageId = data.galery[id].imageURL.split('/').at(-1);
  delete data.galery[id];

  await fs.writeFile(DB_PATH, JSON.stringify(data));
  try {
    await fs.rm(path.join(STORAGE_PATH, imageId), {
      recursive: true,
      force: true,
    });
    res.status(204).send('No content');
  } catch (e) {
    res.status(204).send('No content');
  }
});

app.patch(
  '/galery/:id',
  upload.single('image'),
  async ({ params, body, file }, res) => {
    const id = params.id;
    const data = await getDb();
    const item = data.galery[id];

    if (!item) {
      console.error(`[PATCH] storage/${id}\nNot found \n`, err);
      return res.status(404).send('Not found');
    }

    const newItem = {
      ...item,
      ...body,
    };

    if (file) {
      await fs.rm(path.join(STORAGE_PATH, item.imageURL.split('/').at(-1)), {
        recursive: true,
        force: true,
      });
      newItem.imageURL = `${URL}/storage/${getNoExtFileName(file.originalname)}`;
    }

    data.galery[id] = newItem;
    await fs.writeFile(DB_PATH, JSON.stringify(data));

    res.status(200).send('OK');
  },
);

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}`);
});
