import { fetchGalery } from '@/api/api';
import { DeleteButton } from '@/app/galery/[id]/deleteButton';
import { ERoutePath } from '@/app/model';
import Image from 'next/image';
import { notFound, redirect, RedirectType } from 'next/navigation';
import styles from './styles.module.css';
import { Link } from '@/components/link';

export async function generateStaticParams() {
  const items = await fetchGalery();
  if (!items) {
    return [];
  }

  return items.map(({ id }) => ({ id }));
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const item = (await fetchGalery())?.find((it) => it.id === id);

  if (!item) {
    notFound();
    // redirect(`/${ERoutePath.GALERY}`, RedirectType.replace);
  }
  const editLink = `/${ERoutePath.GALERY}/${id}/${ERoutePath.EDIT}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.imageURL}
          alt={item.title}
          priority
          className={styles.image}
          height={320}
          width={425}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{item.title}</h2>
        <p>{item.desc}</p>
        <div className={styles.controls}>
          <Link href={editLink} border>
            Edit
          </Link>
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  );
}
