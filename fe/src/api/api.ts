'use server';
import { BASE_URL } from '@/api/constants';
import { TGalery, TGaleryItem } from '@/app/model';

const fetchGalery = async () => {
  try {
    const res = await fetch(`${BASE_URL}/galery`, { next: { tags: ['galery'] } });
    if (!res.ok) {
      return undefined;
    }
    const data = (await res.json()) as TGalery;

    return Object.values(data);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchGaleryItem = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/galery/${id}`, { next: { tags: [id] } });
    if (!res.ok) {
      return undefined;
    }
    const json = await res.json();
    return json as TGaleryItem;
  } catch (e) {
    console.error(e);
  }
};

export { fetchGalery, fetchGaleryItem };
