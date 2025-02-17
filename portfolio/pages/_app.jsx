import '@/styles/globals.css';
import { Roboto, Jost } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Removed '200'
  subsets: ['latin'],
  display: 'swap',
});

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} ${jost.className}`}>
      <Component {...pageProps} />
    </main>
  );
}


