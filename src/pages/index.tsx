import Image from 'next/image';
import SVGICON from '@pages/test';
import addon from '@public/addon.png';

export default function Home() {
  return (
    <>
      <h2 className="bg-primary-default"> tailwindcss 테스트 h2</h2>
      <h2>아래는 이미지 테스트 입니다.</h2>
      <SVGICON />
      <Image src={addon} alt="Vercel Logo" width={500} height={300} />
    </>
  );
}
