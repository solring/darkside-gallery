import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CostomDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="personal gallery built on Next.js"
          />

          <link rel="icon" href="favicon.png" />
          <link rel="manifest" href="manifest.json" />

          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

          <title>Rabbit Hole: Personal Gallery</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
