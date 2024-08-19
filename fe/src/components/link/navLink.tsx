'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Link } from './link';
import styles from './styles.module.css';

import { TLinkProps } from '@/components/link/model';

const NavLink = ({ className, border, ...rest }: TLinkProps) => {
  const path = usePathname();

  return (
    <Link
      className={clsx(className, { [styles.active]: path === rest.href })}
      {...rest}
      border={border}
    />
  );
};

export { NavLink };
