import { SubHeader, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { LayoutProps } from '@components/Layout/Layout';

// nofooter & sub header
export const NoFooterLayout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <SubHeader />
      <main className={(styles.main, className)}>{children}</main>
    </div>
  );
};
