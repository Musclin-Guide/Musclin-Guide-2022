import clsx from 'clsx';
import { Checkbox, ImagedListItem } from '@components/index';
import { useState } from 'react';
import styles from '@components/ItemControl/ItemControl.module.css';

export const ItemControl = ({
  subject = '고양이가 고양고양해서 고양시 스타필드 하남시 스타필드',
  time = '2일전',
  wishQuantity = 24,
  likeQuantity = 244,
}: ImagedListItem): JSX.Element => {
  const [select, setselect] = useState(false);
  const [clear, setclear] = useState(false);

  return (
    <article className="inline-block relative">
      <ImagedListItem
        contentsStyle="Col"
        imgWrapper="Col"
        likeQuantity={likeQuantity}
        listWrapper="Col"
        subject={subject}
        time={time}
        wishQuantity={wishQuantity}
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
        className={clsx(styles.checkButton, clear && 'hidden')}
      />
      {/* 머지 후 X버튼 컴포넌트로 바꿀 예정 */}
      <Checkbox
        onClick={() => {
          console.log(clear);
          setclear(() => true);
        }}
        name={'check'}
        className={clsx(styles.exitButton, clear && 'hidden')}
      />
    </article>
  );
};
