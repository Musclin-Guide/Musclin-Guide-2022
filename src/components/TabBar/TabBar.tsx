import clsx from 'clsx';
import SvgCocktail from './Cocktail';
import { HiOutlineHome, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import styles from '@components/TabBar/TabBar.module.css';
import { useState } from 'react';
import { ALinkMenuItem as ALink } from '@components/index';

export const Tabbar = () => {
  const [color, setcolor] = useState(0);

  function changecolor(number: number) {
    return setcolor(number);
  }

  return (
    <>
      <section className="w-[360px] h-[360px] bg-amber-300">
        this is the main area 1 <br />
        tester contents
      </section>
      <section className="w-[360px] h-[360px] bg-amber-400">
        this is the main area 2
      </section>
      <section className="w-[360px] h-[360px] bg-amber-500">
        this is the main area 3
      </section>
      <section className="w-[360px] h-[360px] bg-amber-600">
        this is the main area 4
      </section>
      <ul id="tabBar" className="flex fixed bottom-0">
        <li
          onClick={() => changecolor(0)}
          className={clsx(
            styles.wrapper,
            color === 0 ? styles.active : styles.noActive
          )}
        >
          <ALink className={styles.aLink} href={'/'} isExternal={false}>
            <HiOutlineHome size={32} className="stroke-1" />
            <span>홈</span>
          </ALink>
        </li>
        <li
          onClick={() => changecolor(1)}
          className={clsx(
            styles.wrapper,
            color === 1 ? styles.active : styles.noActive
          )}
        >
          <ALink className={styles.aLink} href={'/'} isExternal={false}>
            <SvgCocktail width={32} height={32} />
            <span className="self-center">칵테일</span>
          </ALink>
        </li>
        <li
          onClick={() => changecolor(3)}
          className={clsx(
            styles.wrapper,
            color === 3 ? styles.active : styles.noActive
          )}
        >
          <ALink className={styles.aLink} href={'/'} isExternal={false}>
            <HiOutlineSearch size={32} />
            <span>제품탐색</span>
          </ALink>
        </li>
        <li
          onClick={() => changecolor(4)}
          className={clsx(
            styles.wrapper,
            color === 4 ? styles.active : styles.noActive
          )}
        >
          <ALink className={styles.aLink} href={'/'} isExternal={false}>
            <HiOutlineUser size={32} />
            <span>마이페이지</span>
          </ALink>
        </li>
      </ul>
    </>
  );
};
