import { Html, Head, Main, NextScript } from 'next/document';
import { Component } from 'react';

export default class MyDocument extends Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add custom meta tags, fonts, etc. here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
