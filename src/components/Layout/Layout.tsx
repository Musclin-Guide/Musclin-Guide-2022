import { widgetToggle } from '@atoms/Widget';
import { Header, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

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
  const Ref = useRef<HTMLElement>(null);
  const [toggle, setToggle] = useRecoilState(widgetToggle);
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (Ref.current && Ref.current.contains(target)) {
        setToggle(true);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [setToggle]);
  return (
    <>
      <div
        className={clsx(
          styles.wrapper,
          wrapperClassName,
          toggle ? '' : 'opacity-50'
        )}
      >
        <Header />
        <main ref={Ref} className={clsx(styles.main, className)}>
          {children}
        </main>
        <TabBar />
      </div>
      <Widget />
    </>
  );
};
