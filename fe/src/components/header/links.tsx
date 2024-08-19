import { ReactNode } from 'react';
import { HomeIcon, PhotoIcon,PlusIcon } from '@heroicons/react/24/outline';

import { ERoutePath } from '@/app/model';

type THeaderLink = {
  name: string;
  href: string;
  icon?: ReactNode;
};

const style = { height: 16, width: 16 };

const HEADER_LINKS: THeaderLink[] = [
  { name: 'Add', href: `/${ERoutePath.ADD}`, icon: <PlusIcon style={style} /> },
  { name: 'Home', href: `/${ERoutePath.HOME}`, icon: <HomeIcon style={style} /> },
  { name: 'Galery', href: `/${ERoutePath.GALERY}`, icon: <PhotoIcon style={style} /> },
];

export { HEADER_LINKS };
