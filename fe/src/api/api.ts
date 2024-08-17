'use server';
import { TGalery, TGaleryItem } from '@/app/model';

const DB_URL = 'http://localhost:4000/galery';

const fetchGalery = async () => {
  try {
    const res = await fetch(DB_URL, { next: { tags: ['galery'] } });
    const data = (await res.json()) as TGalery;

    return Object.values(data);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchGaleryItem = async (id: string) => {
  try {
    const res = await fetch(`${DB_URL}/${id}`, { next: { tags: [id] } });
    const json = await res.json();
    return json as TGaleryItem;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export { fetchGalery, fetchGaleryItem };
