import { TabBar } from '@components/TabBar/index';

import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import type { LayoutProps } from '@components/Layout/Layout';
import { widgetToggle } from '@atoms/Widget';
import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';
import { SubHeader } from '@components/Header/SubHeader';

export const SubHeaderLayout = ({
  className,
  wrapperClassName,
  children,
  subject,
}: LayoutProps): JSX.Element => {
  const Widget = dynamic(() =>
    import('@components/Widget/index').then((module) => module.Widget)
  );

  const Ref = useRef<HTMLElement>(null);
  const [toggle, setToggle] = useRecoilState(widgetToggle);
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (target.classList.contains(styles.disableContents)) {
        setToggle(true);
      }

      if (Ref.current && !Ref.current.contains(target)) {
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
          toggle ? '' : styles.disableContents
        )}
      >
        <SubHeader subject={subject} />
        <main className={clsx(styles.main, className)}>{children}</main>

        <TabBar />
      </div>
      <Widget />
    </>
  );
};
