const fs = require('fs/promises');
const { DB_PATH, STORAGE_PATH } = require('./constants');

const resetDb = async () => {
  await fs.writeFile(DB_PATH, JSON.stringify({ galery: {} }));
};

const clearStorage = async () => {
  await fs.rm(STORAGE_PATH, { recursive: true, force: true });
  await fs.mkdir(STORAGE_PATH);
};

const reset = async () => {
  await Promise.all([resetDb(), clearStorage()]);
};

reset();
