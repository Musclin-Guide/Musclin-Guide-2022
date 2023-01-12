import clsx from 'clsx';
import SvgCocktail from './Cocktail';
import { HiOutlineHome, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import styles from '@components/TabBar/TabBar.module.css';
import { useState } from 'react';
import { ALinkMenuItem as ALink } from '@components/index';

export const TabBar = () => {
  const [color, setcolor] = useState(0);

  function changecolor(number: number) {
    return setcolor(number);
  }

  return (
    <ul id="tabBar" className="flex fixed bottom-0">
      <ALink className={styles.aLink} href={'/'} isExternal={false}>
        <li
          onClick={() => changecolor(0)}
          className={clsx(
            styles.wrapper,
            color === 0 ? styles.active : styles.noActive
          )}
        >
          <HiOutlineHome size={32} className="stroke-1" />
          <span>홈</span>
        </li>
      </ALink>
      <ALink className={styles.aLink} href="/cocktail" isExternal={false}>
        <li
          onClick={() => changecolor(1)}
          className={clsx(
            styles.wrapper,
            color === 1 ? styles.active : styles.noActive
          )}
        >
          <SvgCocktail width={32} height={32} />
          <span className="self-center">칵테일</span>
        </li>
      </ALink>
      <ALink className={styles.aLink} href={'/search'} isExternal={false}>
        <li
          onClick={() => changecolor(3)}
          className={clsx(
            styles.wrapper,
            color === 3 ? styles.active : styles.noActive
          )}
        >
          <HiOutlineSearch size={32} />
          <span>제품탐색</span>
        </li>
      </ALink>
      <ALink className={styles.aLink} href={'/mypage'} isExternal={false}>
        <li
          onClick={() => changecolor(4)}
          className={clsx(
            styles.wrapper,
            color === 4 ? styles.active : styles.noActive
          )}
        >
          <HiOutlineUser size={32} />
          <span>마이페이지</span>
        </li>
      </ALink>
    </ul>
  );
};
