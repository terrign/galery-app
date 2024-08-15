import seed from './seed.json' with { type: 'json' };
import { writeFile } from 'fs/promises';
import { join, resolve } from 'path';

(async function () {
  await writeFile(join(resolve(), 'db', 'db.json'), JSON.stringify(seed));
})();
