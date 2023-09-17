import {
  Rubik,
  Poppins,
  Inter,
  Roboto_Mono,
  Indie_Flower,
} from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const indieFlower = Indie_Flower({
  subsets: ['latin'],
  variable: '--font-indie-flower',
  weight: '400',
});
