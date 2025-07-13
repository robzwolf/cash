import { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/favicon/Favicon";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <Favicon />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </Head>
      <body style={{"backgroundColor": "#152832"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
