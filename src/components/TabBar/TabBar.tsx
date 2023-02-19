import { HiOutlineHome, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import SvgCocktail from './Cocktail';
import styles from '@components/TabBar/TabBar.module.css';
import clsx from 'clsx';
import { ActiveLink } from '@components/ActiveLink/index';
import { memo } from 'react';

interface TabBarProps {
  className?: string;
}

export const TabBar = memo(({ className }: TabBarProps) => {
  return (
    <ul id="tabBar" className={clsx('flex fixed bottom-0', [className])}>
      <li className={styles.wrapper}>
        <ActiveLink
          href={'/'}
          className={clsx(styles.default, styles.aLink)}
          activeClassName={styles.active}
        >
          <HiOutlineHome size={32} className="stroke-1" />
          <span>홈</span>
        </ActiveLink>
      </li>
      <li className={styles.wrapper}>
        <ActiveLink
          href={'/cocktail'}
          className={clsx(styles.default, styles.aLink)}
          activeClassName={styles.active}
        >
          <SvgCocktail width={32} height={32} />
          <span className="self-center">칵테일</span>
        </ActiveLink>
      </li>

      <li className={styles.wrapper}>
        <ActiveLink
          className={clsx(styles.default, styles.aLink)}
          href={'/search'}
          activeClassName={styles.active}
        >
          <HiOutlineSearch size={32} />
          <span>제품탐색</span>
        </ActiveLink>
      </li>
      <li className={styles.wrapper}>
        <ActiveLink
          className={clsx(styles.default, styles.aLink)}
          href={'/mypage'}
          activeClassName={styles.active}
        >
          <HiOutlineUser size={32} />
          <span>마이페이지</span>
        </ActiveLink>
      </li>
    </ul>
  );
});

TabBar.displayName = 'TabBar';
