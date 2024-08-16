import type { Metadata } from 'next';
import '@/assets/globals.css';
import { Header } from '@/components/header';
import { roboto } from '@/assets/font';
import styles from '@/app/page.module.css';

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
    <html lang='en'>
      <body className={roboto.className}>
        <div className={styles.wrapper}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
