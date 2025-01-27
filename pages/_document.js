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
      </Head>
      <body style={{"backgroundColor": "#152832"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
