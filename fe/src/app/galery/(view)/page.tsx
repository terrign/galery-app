import { fetchGalery } from '@/api/api';
import { Card } from '@/components/card';
import Image from 'next/image';

export default async function Page() {
  const data = await fetchGalery();
  return (
    <>
      {data.map((it) => (
        <Card {...it} key={it.id} />
      ))}
    </>
  );
}
