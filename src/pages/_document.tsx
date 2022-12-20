import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko-KR">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          as="style"
          rel="stylesheet"
          crossOrigin={'crossorigin'}
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
