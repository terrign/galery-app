'use client';

import { deleteCard } from '@/api/actions';
import { Button } from '@/components/button';

export const DeleteButton = ({ id }: { id: string }) => {
  const clickHandler = () => {
    deleteCard(id);
  };
  return <Button onClick={clickHandler}>Delete</Button>;
};
