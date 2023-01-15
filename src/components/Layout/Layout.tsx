import { Header, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface LayoutProps {
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
}
export const Layout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <Header />
      <main className={(styles.main, className)}>
        {children}
        <Widget />
      </main>
      <TabBar />
    </div>
  );
};
