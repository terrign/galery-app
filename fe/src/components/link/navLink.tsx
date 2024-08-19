'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import { TLinkProps } from '@/components/link/model';
import { Link } from './link';

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
