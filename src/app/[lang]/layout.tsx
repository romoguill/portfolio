import type { Metadata } from 'next';
import Header from '../../components/Header/Header';
import MainContainer from '../../components/MainContainer';
import { Locale, i18n } from '../../i18n-config';
import { indieFlower, robotoMono, rubik } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Rodrigo Moguillansky',
  description: 'Portfolio',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  console.log({ params });
  return (
    <html
      lang={params.lang ?? i18n.defaultLocale}
      className={`${rubik.variable} ${robotoMono.variable} ${indieFlower.variable}`}
    >
      <body>
        <MainContainer>
          <Header lang={params.lang} />
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
