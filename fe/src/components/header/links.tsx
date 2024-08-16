import { RoutePath } from '@/app/model';
import { ReactNode } from 'react';
import { PlusIcon, HomeIcon, PhotoIcon } from '@heroicons/react/24/outline';

type THeaderLink = {
  name: string;
  href: string;
  icon?: ReactNode;
};

const style = { height: 16, width: 16 };

const HEADER_LINKS: THeaderLink[] = [
  { name: 'Add', href: `/${RoutePath.ADD}`, icon: <PlusIcon style={style} /> },
  { name: 'Home', href: `/${RoutePath.HOME}`, icon: <HomeIcon style={style} /> },
  { name: 'Galery', href: `/${RoutePath.GALERY}`, icon: <PhotoIcon style={style} /> },
];

export { HEADER_LINKS };
