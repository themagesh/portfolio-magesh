import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Roboto, Jost } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
    <ThemeProvider attribute="class">
      <main className={`${roboto.className} ${jost.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
