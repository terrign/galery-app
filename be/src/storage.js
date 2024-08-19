const fsSync = require('fs');
const path = require('path');
const { STORAGE_PATH } = require('./constants');
const multer = require('multer');
const { getNoExtFileName } = require('./utils');

if (!fsSync.existsSync(STORAGE_PATH)) {
  fsSync.mkdir(STORAGE_PATH, () => {});
}

const storage = multer.diskStorage({
  destination: async (_, file, cb) => {
    const dir = path.join(STORAGE_PATH, getNoExtFileName(file.originalname));

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

module.exports = {
  upload,
};
