import { SubHeader } from '@components/Header/SubHeader';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import type { LayoutProps } from '@components/Layout/Layout';
import { TabBar } from '@components/TabBar/TabBar';
export function NoWidjectLayout({
  className,
  wrapperClassName,
  children,
  subject,
}: LayoutProps) {
  return (
    <>
      <div className={clsx(styles.wrapper, wrapperClassName)}>
        <SubHeader subject={subject} />
        <main className={clsx(styles.main, className)}>{children}</main>
        <TabBar />
      </div>
    </>
  );
}
