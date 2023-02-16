import Logo from '@components/Header/Logo';
import Noti from '@components/Header/Noti';
import styles from '@components/Header/Header.module.css';
export interface HeaderProps {
  subject: string;
}
export const Header = ({
  subject = '머슬랭 가이드 홈페이지 입니다',
}: HeaderProps): JSX.Element => {
  return (
    <header className={styles.container}>
      <h1 className="sr-only">{subject}</h1>
      <Logo aria-label="HomeLogo" className="mt-1.5 ml-5" />
      <button type="button">
        <Noti />
      </button>
    </header>
  );
};
