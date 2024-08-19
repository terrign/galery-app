import Image from 'next/image';
import styles from './styles.module.css';

import { ERoutePath, TGaleryItem } from '@/app/model';
import { Link } from '@/components/link';
import { getImageLazyStylesByIndex } from '@/utils';

export const Card = ({ imageURL, title, id, index }: TGaleryItem & { index: number }) => {
  const link = `${ERoutePath.GALERY}/${id}`;
  const lazyImageStyles = getImageLazyStylesByIndex(index);

  return (
    <div className={styles.card}>
      <figure>
        <Link href={link} border>
          <Image src={imageURL} alt={title} height={425} width={320} {...lazyImageStyles} />
          <figcaption>{title}</figcaption>
        </Link>
      </figure>
    </div>
  );
};
