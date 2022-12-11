// import Head from 'next/head';
import Image from 'next/image';
import vercelImg from '@public/vercel.svg';

export default function Home() {
  return (
    <>
      <h2 className="bg-primary-default"> tailwindcss 테스트 h2</h2>
      <h2>아래는 이미지 테스트 입니다.</h2>
      <Image src={vercelImg} alt="Vercel Logo" width={72} height={16} />
    </>
  );
}
