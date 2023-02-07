import { ALinkMenuItem as ALink } from '@components/index';
import Noti from '@components/Header/Noti';
import styles from '@components/Header/Header.module.css';
import { FiChevronLeft } from 'react-icons/all';
import router, { useRouter } from 'next/router';
import type { HeaderProps } from '@components/index';
export interface subHeader extends HeaderProps {
  subject: string;
}
export const SubHeader = ({
  subject = '머슬랭 가이드 홈페이지 입니다',
}: subHeader): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <header className={styles.container}>
        <h1 className="sr-only">{subject}</h1>
        <button className="self-center" onClick={() => router.back()}>
          <FiChevronLeft className="ml-2" strokeWidth={2} size={28} />
        </button>

        <button type="button">
          <Noti />
        </button>
      </header>
    </>
  );
};
