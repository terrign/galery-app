import { RoutePath, TGaleryItem } from '@/app/model';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

const getImageLazyStylesByIndex = (i: number): { loading: 'lazy' } | { priority: true } => {
  if (i <= 12) {
    return {
      priority: true,
    };
  }
  return {
    loading: 'lazy',
  };
};

export const Card = ({ image, title, id, index }: TGaleryItem & { index: number }) => {
  const link = `${RoutePath.GALERY}/${id}`;
  const imageStyles = getImageLazyStylesByIndex(index);
  return (
    <div className={styles.card}>
      <Link href={link}>
        <figure>
          <Image src={image} alt={title} height={425} width={320} {...imageStyles} />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  );
};
