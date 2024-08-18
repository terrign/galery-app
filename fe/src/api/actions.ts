'use server';
import { RoutePath } from '@/app/model';
import { changeFileName } from '@/utils';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

const createCard = async (formData: FormData) => {
  const image = formData.get('image') as File;
  const newImage = changeFileName(image, crypto.randomUUID());
  formData.set('image', newImage);
  formData.set('id', crypto.randomUUID());

  await fetch('http://localhost:4000/galery', { method: 'POST', body: formData })
    .catch((e) => console.error(e))
    .then(() => {
      revalidateTag('galery');
      revalidatePath(`/${RoutePath.GALERY}`);
      redirect(`/${RoutePath.GALERY}`);
    });
};

const updateCard = async (id: string, formData: FormData) => {
  const image = formData.get('image') as File;
  if (image.size === 0) {
    formData.delete('image');
  } else {
    formData.set('image', changeFileName(image, crypto.randomUUID()));
  }

  await fetch(`http://localhost:4000/galery/${id}`, {
    method: 'PATCH',
    body: formData,
  })
    .catch((e) => console.error(e))
    .then(() => {
      revalidateTag(id);
      revalidateTag('galery');
      revalidatePath(`/${RoutePath.GALERY}`);
      revalidatePath(`/${RoutePath.GALERY}/${id}`);
      redirect(`/${RoutePath.GALERY}/${id}`);
    });
};

const deleteCard = async (id: string) => {
  await fetch(`http://localhost:4000/galery/${id}`, {
    method: 'DELETE',
  })
    .catch((e) => console.error(e))
    .then(() => {
      revalidateTag('galery');
      revalidatePath(`/${RoutePath.GALERY}`);
      redirect(`/${RoutePath.GALERY}`);
    });
};

export { createCard, updateCard, deleteCard };
