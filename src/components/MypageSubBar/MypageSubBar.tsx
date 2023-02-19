import clsx from 'clsx';
import styles from '@components/MypageSubBar/MypageSubBar.module.css';
import { ReactNode, useState } from 'react';

interface MypageSubBar {
  firstContents: ReactNode;
  secondContents: ReactNode;
  thirdContents: ReactNode;
  forthContents: ReactNode;
}
export function MyPagSubBar({ ...props }: MypageSubBar) {
  const [contents, setcontents] = useState(1);
  const Dummydata = [
    {
      id: 1,
      title: '전체 리뷰',
    },
    {
      id: 2,
      title: '전체 칵테일',
    },
    {
      id: 3,
      title: '댓글 목록',
    },
    {
      id: 4,
      title: '찜 목록',
    },
  ];
  return (
    <>
      <ul className="flex">
        {Dummydata.map((item) => (
          <li
            key={item.id}
            className={clsx(
              styles.li,
              contents === item.id ? styles.liActive : null
            )}
            onClick={() => setcontents(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {contents === 1 && <section>{props.firstContents}</section>}
      {contents === 2 && <section>{props.secondContents}</section>}
      {contents === 3 && <section>{props.thirdContents}</section>}
      {contents === 4 && <section>{props.forthContents}</section>}
    </>
  );
}

{
  /* {Dummydata.filter((item) => item.id === contents).map((item) => {
        return (
          <div key={item.id} className="m-4">
            {item.description}
          </div>
        );
      })} */
}
