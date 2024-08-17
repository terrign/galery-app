import { RoutePath, TGaleryItem } from '@/app/model';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

const getImageLazyStylesByIndex = (i: number): { loading: 'lazy' | 'eager'; priority?: true } => {
  if (i <= 12) {
    return {
      priority: true,
      loading: 'eager',
    };
  }
  return {
    loading: 'lazy',
  };
};

export const Card = ({ imageURL, title, id, index }: TGaleryItem & { index: number }) => {
  const link = `${RoutePath.GALERY}/${id}`;
  const imageStyles = getImageLazyStylesByIndex(index);
  return (
    <div className={styles.card}>
      <Link href={link}>
        <figure>
          <Image
            src={imageURL}
            alt={title}
            height={425}
            width={320}
            {...imageStyles}
            // placeholder="blur"
          />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  );
};
