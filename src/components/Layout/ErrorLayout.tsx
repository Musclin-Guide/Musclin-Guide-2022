import { Header } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { LayoutProps } from '@components/Layout/Layout';

export const ErrorLayout = ({
  className,
  wrapperClassName,
  children,
  subject,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={clsx(styles.wrapper, wrapperClassName)}>
        <Header subject={'에러가 생겼습니다'} />
        <main className={clsx(styles.main, className)}>{children}</main>
      </div>
    </>
  );
};
