import { fetchGaleryItem } from '@/api/api';
import { RoutePath } from '@/app/model';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const { title, image, desc } = await fetchGaleryItem(id);
  const link = `/${RoutePath.GALERY}/${id}/${RoutePath.EDIT}`;
  return (
    <>
      <h3>{title}</h3>
      <Image src={image} width='500' height='300' alt={title} priority />
      <p>{desc}</p>
      <Link href={link}>Edit</Link>
    </>
  );
}
