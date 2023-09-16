import { Rubik, Poppins, Inter, Roboto_Mono } from 'next/font/google';

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
