import { fetchGalery, fetchGaleryItem } from '@/api/api';
import { DeleteButton } from '@/app/galery/[id]/deleteButton';
import { RoutePath } from '@/app/model';

import Image from 'next/image';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';

export async function generateStaticParams() {
  const items = await fetchGalery();
  if (!items) {
    return [];
  }

  return items.map(({ id }) => ({ id }));
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const item = await fetchGaleryItem(id);

  if (!item) {
    redirect(`/${RoutePath.GALERY}`, RedirectType.replace);
  }
  const editLink = `/${RoutePath.GALERY}/${id}/${RoutePath.EDIT}`;

  return (
    <>
      <h3>{item.title}</h3>
      <Image src={item.imageURL} width="500" height="300" alt={item.title} priority />
      <p>{item.desc}</p>
      <Link href={editLink}>Edit</Link>
      <DeleteButton id={id} />
    </>
  );
}
