import { rm, mkdir } from 'fs/promises';

const clear = async () => {
  await rm('storage/blobs', { recursive: true, force: true });
  await mkdir('storage/blobs');
};

clear();
