import { ReactNode } from 'react';
import { HomeIcon, PhotoIcon, PlusIcon } from '@heroicons/react/24/outline';

import { ERoutePath } from '@/app/model';

type THeaderLink = {
  name: string;
  href: string;
  icon?: ReactNode;
};

const HEADER_LINKS: THeaderLink[] = [
  { name: 'Add', href: `/${ERoutePath.ADD}`, icon: <PlusIcon className="icon" /> },
  { name: 'Home', href: `/${ERoutePath.HOME}`, icon: <HomeIcon className="icon" /> },
  { name: 'Galery', href: `/${ERoutePath.GALERY}`, icon: <PhotoIcon className="icon" /> },
];

export { HEADER_LINKS };
