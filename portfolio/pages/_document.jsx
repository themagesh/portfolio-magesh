import { Html, Head, Main, NextScript } from 'next/document';
import { Component } from 'react';

export default class MyDocument extends Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="A showcase of my work and skills." />
          <title>MageshKumar | Portfolio</title>
          {/* Add custom meta tags, fonts, etc. here */}
          <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
