import { SubHeader, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { LayoutProps } from '@components/Layout/Layout';
import { widgetToggle } from '@atoms/Widget';
import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const SubHeaderLayout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  const Ref = useRef<HTMLElement>(null);
  const [toggle, setToggle] = useRecoilState(widgetToggle);
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
        <SubHeader />
        <main ref={Ref} className={clsx(styles.main, className)}>
          {children}
        </main>
        <TabBar />
      </div>
      <Widget />
    </>
  );
};
