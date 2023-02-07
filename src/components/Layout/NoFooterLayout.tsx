import { SubHeader, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import type { LayoutProps } from '@components/Layout/Layout';

// nofooter & sub header
export const NoFooterLayout = ({
  className,
  wrapperClassName,
  children,
  subject,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={clsx(styles.wrapper, wrapperClassName)}>
        <SubHeader subject={subject} />
        <main className={clsx(styles.main, className)}>{children}</main>
      </div>
    </>
  );
};
