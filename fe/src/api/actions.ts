'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect, RedirectType } from 'next/navigation';

import { BASE_URL } from '@/api/constants';
import { ERoutePath } from '@/app/model';
import { changeFileName } from '@/utils';

const createCard = async (formData: FormData) => {
  const image = formData.get('image') as File;
  const newImage = changeFileName(image, crypto.randomUUID());
  formData.set('image', newImage);
  formData.set('id', crypto.randomUUID());

  await fetch(`${BASE_URL}/galery`, { method: 'POST', body: formData })
    .then(() => {
      revalidateTag('galery');
      revalidatePath(`/${ERoutePath.GALERY}`);
    })
    .catch((e) => console.error(e))
    .finally(() => redirect(`/${ERoutePath.GALERY}`));
};

const updateCard = async (id: string, formData: FormData) => {
  const image = formData.get('image') as File;

  if (image.size === 0) {
    formData.delete('image');
  } else {
    formData.set('image', changeFileName(image, crypto.randomUUID()));
  }

  await fetch(`${BASE_URL}/galery/${id}`, {
    method: 'PATCH',
    body: formData,
  })
    .then(() => {
      revalidateTag(id);
      revalidateTag('galery');
      revalidatePath(`/${ERoutePath.GALERY}`);
      revalidatePath(`/${ERoutePath.GALERY}/${id}`);
    })
    .catch((e) => console.error(e))
    .finally(() => redirect(`/${ERoutePath.GALERY}/${id}`));
};

const deleteCard = async (id: string) => {
  await fetch(`${BASE_URL}/galery/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      revalidateTag('galery');
      revalidateTag(id);
      revalidatePath(`/${ERoutePath.GALERY}/${id}`);
      revalidatePath(`/${ERoutePath.GALERY}`);
    })
    .catch((e) => console.error(e))
    .finally(() => redirect(`/${ERoutePath.GALERY}`, RedirectType.replace));
};

export { createCard, deleteCard,updateCard };
