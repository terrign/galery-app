import { RoutePath, TGaleryItem } from '@/app/model';
import Image from 'next/image';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from 'next/link';

export const Card = ({ image, title, id }: TGaleryItem) => {
  const link = `${RoutePath.GALERY}/${id}/${RoutePath.EDIT}`;
  console.log(link);
  return (
    <div className={clsx(styles.card)}>
      <Link href={link}>
        <figure className='border'>
          <Image src={image} alt={title} height={425} width={320} loading='lazy' />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  );
};
