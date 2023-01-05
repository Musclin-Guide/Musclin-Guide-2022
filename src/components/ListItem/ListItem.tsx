import styles from '@components/ListItem/ListItem.module.css';
import clsx from 'clsx';

interface ListItemProps {
  subject: string;
  time?: string;
  likeQuantity?: number;
  wishQuantity?: number;
  className?: string;
  contentsStyle: 'Row' | 'Col';
  wrapperStyle: 'Row' | 'Col';
}

const contentsStyles = {
  Row: styles.row,
  Col: styles.col,
};

const wrapperStyles = {
  Row: styles.wrapperRow,
  Col: styles.wrapperCol,
};

export const ListItem = ({
  subject = '고양이는 귀엽고 또 귀여우니 우리는 받아들여야해 그렇단말이야!',
  time = '3일전',
  likeQuantity = 30,
  wishQuantity = 30,
  contentsStyle = 'Row',
  wrapperStyle = 'Row',
  className,
}: ListItemProps) => {
  //병합 후 가장 바깥쪽에 ALINK 컴포넌트에 감쌀 예정
  return (
    <>
      <div
        className={clsx(styles.wrapper, wrapperStyles[wrapperStyle], className)}
      >
        <span>{time}</span>
        <strong className={clsx(styles.common, contentsStyles[contentsStyle])}>
          {subject}
        </strong>
        {/* 임시 데모 컴포넌트 */}
        <div className="inline-flex gap-2">
          <span>별점 {likeQuantity}</span>
          <span>찜 {wishQuantity}</span>
        </div>
      </div>
    </>
  );
};
