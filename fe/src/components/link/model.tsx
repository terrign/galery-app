import { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';

type TLinkProps = ComponentPropsWithRef<typeof NextLink> &
  HTMLAttributes<HTMLAnchorElement> & { icon?: ReactNode; border?: boolean };

export { type TLinkProps };
