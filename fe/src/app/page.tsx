import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';

import { ERoutePath } from '@/app/model';
import { Link } from '@/components/link';

export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Test task for SLMax</h1>
      <Link href={ERoutePath.GALERY} icon={<ArrowRightIcon className="icon" />} border>
        Explore Galery
      </Link>
      <h2>Or</h2>
      <Link href={ERoutePath.ADD} icon={<ArrowLeftIcon className="icon" />} border>
        Add your item
      </Link>
    </div>
  );
}
