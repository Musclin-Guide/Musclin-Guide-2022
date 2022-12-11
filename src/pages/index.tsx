// import Head from 'next/head';
import Image from 'next/image';
import Vercel from '@public/vercel copy.svg';
import test from '@public/addon.png';

export default function Home() {
  return (
    <>
      <h2 className="bg-primary-default"> tailwindcss 테스트 h2</h2>
      <h2>아래는 이미지 테스트 입니다.</h2>
      <Vercel />
      <Image src={test} alt="Vercel Logo" width={500} height={300} />
    </>
  );
}
