import { Roboto, Jost, Caveat } from 'next/font/google';

export const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});
