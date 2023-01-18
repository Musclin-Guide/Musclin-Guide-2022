/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListItem } from '@components/index';
import clsx from 'clsx';
import Image from 'next/image';
import styles from '@components/ImagedListItem/ImagedListItem.module.css';
import { ListItemProps } from '@components/ListItem/ListItem';
import { ALinkMenuItem as ALink } from '@components/index';

export interface ImagedListItem extends ListItemProps {
  imgWrapper: 'Row' | 'Col';
  listWrapper: 'Row' | 'Col';
  className?: string;
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
  className,
  subject,
  time,
  likeQuantity,
}: ImagedListItem): JSX.Element => {
  return (
    <ALink
      className={clsx(styles.wrapper, wrappers[listWrapper], className)}
      href={'/'}
      isExternal={false}
    >
      <div className={clsx(styles.imgWrapper, imgWrappers[imgWrapper])}>
        <Image
          src={'/assets/demo.jpeg'}
          alt={'대체 텍스트'}
          fill
          className={clsx(styles.imgCommon, className)}
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
    </ALink>
  );
};
