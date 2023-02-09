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
  href: string | object;
  className?: string;
  src: string;
  alt: string;
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
  count,
  className,
  subject,
  time,
  src,
  alt,
  href = '/',
  likeQuantity,
}: ImagedListItem): JSX.Element => {
  return (
    <ALink
      className={clsx(styles.wrapper, wrappers[listWrapper], className)}
      href={href}
      isExternal={false}
    >
      <li className={clsx(styles.imgWrapper, imgWrappers[imgWrapper])}>
        <Image
          src={src}
          alt={alt}
          fill
          className={clsx(styles.imgCommon, className)}
          placeholder="blur"
          blurDataURL="/assets/noImage.png"
        />
      </li>
      <ListItem
        contentsStyle={contentsStyle}
        count={count}
        likeQuantity={likeQuantity}
        wrapperStyle={wrapperStyle}
        subject={subject}
        time={time}
      />
    </ALink>
  );
};
