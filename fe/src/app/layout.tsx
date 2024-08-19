import type { Metadata } from 'next';
import '@/assets/globals.css';
import styles from '@/app/styles.module.css';

import { roboto } from '@/assets/font';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Galery',
  description: 'Galery',
  icons: ['/favicon.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className={styles.wrapper}>{children}</main>
      </body>
    </html>
  );
}
