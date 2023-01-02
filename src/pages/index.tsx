import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>홈 페이지</title>
      </Head>
      <h2 className="bg-primary-default"> tailwindcss 테스트 h2</h2>
      <h2>아래는 이미지 테스트 입니다.</h2>
    </>
  );
}
