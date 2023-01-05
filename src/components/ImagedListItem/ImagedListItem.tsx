/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListItem } from '@components/index';
import clsx from 'clsx';
import Image from 'next/image';
import styles from '@components/ImagedListItem/ImagedListItem.module.css';
import { ListItemProps } from '@components/ListItem/ListItem';

interface ImagedListItem extends ListItemProps {
  imgWrapper: 'Row' | 'Col';
  listWrapper: 'Row' | 'Col';
}

const imgWrappers = {
  Row: styles.imgWrapperRow,
  Col: styles.imgWrapperCol,
};

const wrappers = {
  Row: styles.wrapperRow,
  Col: styles.wrapperCol,
};

export const ImagedListItem = ({
  imgWrapper,
  listWrapper,
  contentsStyle,
  wrapperStyle,
  wishQuantity,
  subject,
  time,
  likeQuantity,
}: ImagedListItem): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, wrappers[listWrapper])}>
      <div className={clsx(styles.imgWrapper, imgWrappers[imgWrapper])}>
        <Image
          src={'/assets/demo.jpeg'}
          alt={'대체 텍스트'}
          fill
          className={styles.imgCommon}
          placeholder="blur"
          blurDataURL="/assets/non_img"
        />
      </div>
      <ListItem
        contentsStyle={contentsStyle}
        wishQuantity={wishQuantity}
        likeQuantity={likeQuantity}
        wrapperStyle={wrapperStyle}
        subject={subject}
        time={time}
      />
    </div>
  );
};
