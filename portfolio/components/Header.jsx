import Head from 'next/head';
import { jost, caveat } from './Fonts'; 

export default function Header({ title, description }) {
  return (
    <Head>
      <title>{title}MageshKumar |  Portfolio</title>
      <meta name="description" content={description} />
      
      {/* Correct favicon path */}
      <link rel="icon" href="/assets/img/favicon.ico" />
      
      {/* Add additional icons for better browser support */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
      <meta name="theme-color" content="#000000" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
  );
}
