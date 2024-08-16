'use server';
import { TGaleryItem } from '@/app/model';
import axios from 'axios';

const DB_URL = 'http://localhost:4000/galery/';

const fetchGalery = async () => {
  const res = await axios.get(DB_URL);
  return res.data as TGaleryItem[];
};

const fetchGaleryItem = async (id: string) => {
  const res = await axios.get(`${DB_URL}?id=${id}`);
  return res.data[0] as TGaleryItem;
};

export { fetchGalery, fetchGaleryItem };
