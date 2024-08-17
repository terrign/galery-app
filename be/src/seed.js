const fs = require('fs/promises');
const { DB_PATH, DB_SEED_PATH } = require('./constants');

const seedDb = async () => {
  const seed = await fs.readFile(DB_SEED_PATH);
  await fs.writeFile(DB_PATH, JSON.stringify(JSON.parse(seed)));
};

seedDb();
