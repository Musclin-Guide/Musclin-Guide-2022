import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>홈 페이지</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>
      <h2 className="bg-primary-default"> tailwindcss 테스트 h2</h2>
      <h2>아래는 이미지 테스트 입니다.</h2>
    </>
  );
}
