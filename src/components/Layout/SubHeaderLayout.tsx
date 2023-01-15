import { SubHeader, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { LayoutProps } from '@components/Layout/Layout';

export const SubHeaderLayout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <SubHeader />
      <main className={(styles.main, className)}>
        {children}
        <Widget />
      </main>
      <TabBar />
    </div>
  );
};
