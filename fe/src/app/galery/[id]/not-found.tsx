import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';

import { ERoutePath } from '@/app/model';
import { Link } from '@/components/link';

export default function Page() {
  return (
    <div className={styles.notFound}>
      <h1>404 | Not found</h1>
      <p>The item you are looking for has been removed or never existed.</p>
      <Link href={`/${ERoutePath.GALERY}`} border icon={<ArrowLeftIcon className="icon" />}>
        Back to Galery
      </Link>
    </div>
  );
}
