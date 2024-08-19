import { updateCard } from '@/api/actions';
import { fetchGaleryItem } from '@/api/api';
import { CardForm } from '@/components/cardForm';
import { notFound, redirect, RedirectType } from 'next/navigation';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const item = await fetchGaleryItem(id);

  if (!item) {
    notFound();
  }

  return <CardForm action={updateCard.bind(null, id)} initData={item} />;
}
