import { Header } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { LayoutProps } from '@components/Layout/Layout';

export const ErrorLayout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={clsx(styles.wrapper, wrapperClassName)}>
        <Header />
        <main className={clsx(styles.main, className)}>{children}</main>
      </div>
    </>
  );
};
