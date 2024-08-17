import { fetchGalery } from '@/api/api';
import { Card } from '@/components/card';

export default async function Page() {
  const data = await fetchGalery();

  if (!data || data.length === 0) {
    return <h2>No Data</h2>;
  }

  return (
    <>
      {data.map((it, index) => (
        <Card {...it} key={it.id} index={index} />
      ))}
    </>
  );
}
