import { fetchGalery } from '@/api/api';
import { Card } from '@/components/card';

export default async function Page() {
  const data = await fetchGalery();
  return (
    <>
      {data.map((it, index) => (
        <Card {...it} key={it.id} index={index} />
      ))}
    </>
  );
}
