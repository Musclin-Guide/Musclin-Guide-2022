import { ALinkMenuItem as ALink } from '@components/index';
import Noti from '@components/Header/Noti';
import styles from '@components/Header/Header.module.css';
import { FiChevronLeft } from 'react-icons/all';
export const SubHeader = (): JSX.Element => {
  return (
    <>
      <header className={styles.container}>
        <h1 className="sr-only">머슬랭 가이드 홈페이지 입니다.</h1>
        <ALink className="self-center" href={'/'} isExternal={false}>
          <FiChevronLeft className="ml-2" strokeWidth={2} size={28} />
        </ALink>

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
