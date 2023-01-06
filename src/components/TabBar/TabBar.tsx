import clsx from 'clsx';
import { atom, useRecoilState } from 'recoil';
import SvgCocktail from './Cocktail';
import { HiOutlineHome, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import styles from '@components/TabBar/TabBar.module.css';
import { useState } from 'react';

// A컴포넌트와 합쳐서 리팩토링 거쳐야함.

export const Tabbar = () => {
  const [color, setcolor] = useState(0);

  function changecolor(number: number) {
    return setcolor(number);
  }

  return (
    <ul id="tabBar" className="flex">
      <li
        onClick={() => changecolor(0)}
        className={clsx(
          styles.wrapper,
          color === 0 ? styles.active : styles.noActive
        )}
      >
        <HiOutlineHome size={32} className="stroke-1" />홈
      </li>
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
      <li
        onClick={() => changecolor(3)}
        className={clsx(
          styles.wrapper,
          color === 3 ? styles.active : styles.noActive
        )}
      >
        <HiOutlineSearch size={32} />
        제품탐색
      </li>
      <li
        onClick={() => changecolor(4)}
        className={clsx(
          styles.wrapper,
          color === 4 ? styles.active : styles.noActive
        )}
      >
        <HiOutlineUser size={32} />
        마이페이지
      </li>
    </ul>
  );
};
