import { updateCard } from '@/api/actions';
import { fetchGaleryItem } from '@/api/api';

import { CardForm } from '@/components/cardForm';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const item = await fetchGaleryItem(id);

  return <CardForm action={updateCard.bind(null, id)} initData={item} />;
}
