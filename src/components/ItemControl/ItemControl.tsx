import clsx from 'clsx';
import { Checkbox, ImagedListItem } from '@components/index';
import { useState } from 'react';
import styles from '@components/ItemControl/ItemControl.module.css';

export const ItemControl = (background = 'white'): JSX.Element => {
  const [select, setselect] = useState(false);
  const [clear, setclear] = useState(false);

  return (
    <article
      style={{
        '--background': background,
      }}
      className="inline-block relative"
    >
      <ImagedListItem
        contentsStyle="Col"
        imgWrapper="Col"
        likeQuantity={244}
        listWrapper="Col"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wishQuantity={24}
        wrapperStyle="Col"
        className={clsx('relative', [
          select ? styles.selected : 'bg-white',
          clear && styles.exited,
        ])}
      />
      <Checkbox
        onClick={() => {
          setselect((prev) => !prev);
        }}
        name={'check'}
        className={clsx('absolute left-[10px] top-[10px] ', clear && 'hidden')}
      />
      {/* 머지 후 X버튼 컴포넌트로 바꿀 예정 */}
      <Checkbox
        onClick={() => {
          console.log(clear);
          setclear(() => true);
        }}
        name={'check'}
        className={clsx('absolute right-[10px] top-[10px] ', clear && 'hidden')}
      />
    </article>
  );
};
