import Logo from '@components/Header/Logo';
import Noti from '@components/Header/Noti';
import styles from '@components/Header/Header.module.css';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <h1 className="sr-only">머슬랭 가이드 홈페이지 입니다.</h1>
      <Logo className="mt-1.5 ml-5" />
      <button type="button">
        <Noti />
      </button>
    </header>
  );
};
