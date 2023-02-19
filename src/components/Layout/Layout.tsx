import { widgetToggle } from '@atoms/Widget';

import type { HeaderProps } from '@components/Header/Header';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { memo, ReactNode, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';

export interface LayoutProps extends HeaderProps {
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
}

export const Layout = memo(
  ({
    className,
    wrapperClassName,
    children,
    subject,
  }: LayoutProps): JSX.Element => {
    const Header = dynamic(() =>
      import('@components/Header/Header').then((module) => module.Header)
    );
    const Widget = dynamic(() =>
      import('@components/Widget/index').then((module) => module.Widget)
    );
    const TabBar = dynamic(() =>
      import('@components/TabBar/index').then((module) => module.TabBar)
    );
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
    }, []);
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
  }
);

Layout.displayName = 'Layout';
