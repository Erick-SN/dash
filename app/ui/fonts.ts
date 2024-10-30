import { Lusitana, Montserrat } from 'next/font/google';

export const monserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-monserrat',
});

export const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lusitana',
});
