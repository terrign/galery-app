const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const cors = require('cors');
const multer = require('multer');
const fsSync = require('fs');

const constants = require('./constants');

const { DB_PATH, STORAGE_PATH, PORT, URL, CORS_OPTIONS } = constants;

if (!fsSync.existsSync(STORAGE_PATH)) {
  fsSync.mkdir(STORAGE_PATH, () => {});
}

const getNoExtFileName = (fileName) => {
  const arr = fileName.split('.');
  arr.pop();
  return arr.join('');
};

const getImageDir = (fileName) =>
  path.join(STORAGE_PATH, getNoExtFileName(fileName));

const storage = multer.diskStorage({
  destination: async (_, file, cb) => {
    const dir = getImageDir(file.originalname);

    if (!fsSync.existsSync(dir)) {
      fsSync.mkdir(dir, () => {});
    }

    cb(null, dir);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();
app.use(express.json(), cors(CORS_OPTIONS));

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
    return res.status(400).json({ error: `${id} not found` });
  }
  return res.status(200).json(item);
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
    .catch((e) => console.error(e));

  res.status(200).json(newItem);
});

app.delete('/galery/:id', async ({ params }, res) => {
  const { id } = params;
  const data = await getDb();

  const imageId = data.galery[id].imageURL.split('/').at(-1);
  delete data.galery[id];

  await fs.writeFile(DB_PATH, JSON.stringify(data));
  await fs
    .rm(path.join(STORAGE_PATH, imageId), { recursive: true, force: true })
    .catch((e) => console.error(e));

  res.status(200).send('OK');
});

app.get('/storage/:id', async function (req, res) {
  const dirPath = path.join(STORAGE_PATH, req.params.id);

  const fileName = (await fs.readdir(dirPath))[0];

  res.sendFile(path.join(dirPath, fileName), (err) => {
    if (err) {
      console.error('File not found:', err);
      res.status(404).send('File not found');
    }
  });
});

app.patch(
  '/galery/:id',
  upload.single('image'),
  async ({ params, body, file }, res) => {
    const id = params.id;
    const data = await getDb();
    const item = data.galery[id];

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
