const path = require('path');

const DB_SEED_PATH = path.join(__dirname, 'db', 'seed.json');
const DB_PATH = path.join(__dirname, 'db', 'db.json');
const STORAGE_PATH = path.join(__dirname, 'blobs');
const PORT = 4000;
const HOST = 'http://localhost';
const URL = `${HOST}:${PORT}`;

const CORS_OPTIONS = {
  origin: URL,
  methods: 'GET,PATCH,POST,DELETE,HEAD',
};

module.exports = {
  DB_SEED_PATH,
  DB_PATH,
  STORAGE_PATH,
  PORT,
  HOST,
  URL,
  CORS_OPTIONS,
};
