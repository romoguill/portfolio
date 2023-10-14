import type { Metadata } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import { robotoMono, rubik, indieFlower } from '../fonts';
import '../globals.css';
import Header from '../../components/Header/Header';
import MainContainer from '../../components/MainContainer';
import { i18n } from '../../i18n-config';

export const metadata: Metadata = {
  title: 'Rodrigo Moguillansky',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang ?? i18n.defaultLocale}
      className={`${rubik.variable} ${robotoMono.variable} ${indieFlower.variable}`}
    >
      <body>
        <MainContainer>
          <Header />
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
