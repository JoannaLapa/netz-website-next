import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import '../../globals.css';
import { Roboto_Slab, Roboto_Condensed } from 'next/font/google';
import Head from '../head';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${roboto_condensed.variable} ${roboto_slab.variable}`}
    >
      <Head params={{ lng }} />
      <body>{children}</body>
    </html>
  );
}
