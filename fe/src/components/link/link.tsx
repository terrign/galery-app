import NextLink from 'next/link';
import clsx from 'clsx';
import styles from './styles.module.css';

import { TLinkProps } from '@/components/link/model';

const Link = ({ icon, children, className, border, ...rest }: TLinkProps) => {
  return (
    <NextLink
      {...rest}
      className={clsx(styles.link, 'clickable', { [styles.border]: border }, className)}
    >
      {icon && icon}
      {children}
    </NextLink>
  );
};

export { Link };
