import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { join, resolve } from 'path';

const app = express();
const port = 4001;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'storage/blobs/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/storage', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
  });
});

app.get('/storage/:uuid', function (req, res) {
  const fileName = req.params.uuid;

  const filePath = join(resolve(), 'storage', 'blobs', fileName);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('File not found:', err);
      res.status(404).send('File not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
