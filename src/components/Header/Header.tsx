import Image from 'next/image';
import Logo from '@components/Header/Logo';
import Noti from '@components/Header/Noti';
import { ReactNode } from 'react';
import styles from '@components/Header/Header.module.css';
import clsx from 'clsx';

export const Header = ({ ...props }) => {
  return (
    <>
      <header
        className={clsx(
          'bg-white w-[360px] h-16 flex justify-between px-5 border-b border-neutral-100 fixed top-0 '
        )}
      >
        <h1 className="sr-only">머슬랭 가이드 홈페이지 입니다.</h1>
        {/* A링크로 감쌀예정*/}
        <Logo className="mt-1.5" />
        <button type="button">
          <Noti />
        </button>
      </header>
      {/* 테스트용 섹션 */}
      <section className="w-[360px] h-[360px] bg-amber-300">
        this is the main area 1 <br />
        tester contents
      </section>
      <section className="w-[360px] h-[360px] bg-amber-400">
        this is the main area 2
      </section>
      <section className="w-[360px] h-[360px] bg-amber-500">
        this is the main area 3
      </section>
      <section className="w-[360px] h-[360px] bg-amber-600">
        this is the main area 4
      </section>
    </>
  );
};

// export const Header2 = () => {
//   return (
//     <Header>
//       <Logo />
//     </Header>
//   );
// };
