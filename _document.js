/* eslint-disable @next/next/inline-script-id */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#155457" />
          <meta name="description" content="The Royal Mint Baharagora" />
          <meta name="msapplication-TileColor" content="#155457"></meta>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#155457" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="preload"
            href="/fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://royalmint.vercel.app/" />
          <meta property="og:title" content="The Royal Mint Baharagora" />
          <meta
            property="og:description"
            content="The Royal Mint - a multicuisine restaurant in Baharagora"
          />
          <meta
            property="og:image"
            content="https://royalmint.vercel.app/logo512.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
