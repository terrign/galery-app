'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

type TNavLinkProps = ComponentPropsWithRef<typeof Link> & HTMLAttributes<HTMLAnchorElement> & { icon?: ReactNode };

const NavLink = ({ icon, children, ...rest }: TNavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      {...rest}
      className={clsx(styles.navLink, 'clickable', rest.className, {
        [styles.active]: rest.href === path,
      })}
    >
      {icon && icon}
      {children}
    </Link>
  );
};

export { NavLink };
