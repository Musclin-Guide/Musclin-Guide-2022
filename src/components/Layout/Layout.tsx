import { widgetToggle } from '@atoms/Widget';
import { Header, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import type { HeaderProps } from '@components/index';

export interface LayoutProps extends HeaderProps {
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
}

export const Layout = ({
  className,
  wrapperClassName,
  children,
  subject,
}: LayoutProps): JSX.Element => {
  const Ref = useRef<HTMLElement>(null);
  const [toggle, setToggle] = useRecoilState(widgetToggle);
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(styles.disableContents)) {
        setToggle(true);
      }

      if (Ref.current && Ref.current.contains(target)) {
        setToggle(true);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [toggle]);
  return (
    <>
      <div
        className={clsx(
          styles.wrapper,
          wrapperClassName,
          toggle ? '' : styles.disableContents
        )}
      >
        <Header subject={subject} />
        <main ref={Ref} className={clsx(styles.main, className)}>
          {children}
        </main>
        <TabBar />
      </div>
      <Widget />
    </>
  );
};
