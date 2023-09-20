import type { Metadata } from 'next';
import Navbar from '../components/Navbar/Navbar';
import { robotoMono, rubik, indieFlower } from './fonts';
import './globals.css';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer';

export const metadata: Metadata = {
  title: 'Rodrigo Moguillansky',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
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
