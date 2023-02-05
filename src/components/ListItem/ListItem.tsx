import styles from '@components/ListItem/ListItem.module.css';
import clsx from 'clsx';
import { UserReviewUnitItem } from '@components/index';
import { HiOutlineHeart, HiOutlineStar } from 'react-icons/hi';

export interface ListItemProps {
  id?: number;
  subject?: string;
  time?: string;
  likeQuantity?: number;
  count: number;
  className?: string;
  contentsStyle?: 'Row' | 'Col';
  wrapperStyle?: 'Row' | 'Col';
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
  id,
  subject = '고양이는 귀엽고 또 귀여우니 우리는 받아들여야해 그렇단말이야!',
  time = '3일전',
  count,
  contentsStyle = 'Row',
  wrapperStyle = 'Row',
  className,
}: ListItemProps) => {
  return (
    <>
      <div
        id={`${id}`}
        className={clsx(className, styles.wrapper, wrapperStyles[wrapperStyle])}
      >
        <span>{time}</span>
        <strong className={clsx(styles.common, contentsStyles[contentsStyle])}>
          {subject}
        </strong>

        <div className="inline-flex gap-4">
          {/* <UserReviewUnitItem
            count={81}
            icon={<HiOutlineStar className="fill-yellow-300" />}
          /> */}
          <UserReviewUnitItem
            count={count}
            icon={<HiOutlineHeart className="fill-red-500" />}
          />
        </div>
      </div>
    </>
  );
};
