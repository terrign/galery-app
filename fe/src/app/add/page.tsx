import { createCard } from '@/api/actions';
import { CardForm } from '@/components/cardForm';

export default async function Page() {
  return (
    <>
      <CardForm action={createCard} />
    </>
  );
}
