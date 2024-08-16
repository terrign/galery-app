'use server';
import { RoutePath } from '@/app/model';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const createCard = async (formData: FormData) => {
  const id = crypto.randomUUID();
  const title = formData.get('title');
  const desc = formData.get('desc');
  const file = formData.get('file') as File;

  const fileExtension = file.name.split('.').pop();
  const newFileName = `${id}.${fileExtension}`;
  const newFile = new File([file], newFileName, { type: file.type });
  formData.set('file', newFile);

  const data = {
    id,
    title,
    desc,
    image: `http://localhost:4001/storage/${newFileName}`,
  };

  await Promise.all([
    axios.post('http://localhost:4001/storage', formData),
    axios.post(`http://localhost:4000/galery`, data),
  ]);
  revalidatePath(RoutePath.GALERY);
  redirect(RoutePath.GALERY);
};

const updateCard = async (formData: FormData) => {};

export { createCard, updateCard };
