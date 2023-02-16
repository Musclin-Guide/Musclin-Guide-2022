/* eslint-disable @typescript-eslint/no-unused-vars */

import { ListItem, ListItemProps } from '@components/index';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@components/ImagedListItem/ImagedListItem.module.css';
import { memo } from 'react';

export interface ImagedListItem extends ListItemProps {
  imgWrapper: 'Row' | 'Col';
  listWrapper: 'Row' | 'Col';
  href: string | object;
  src: string;
  alt: string;
  id: string;
}

const imgWrappers = {
  Row: styles.imgWrapperRow,
  Col: styles.imgWrapperCol,
};

const wrappers = {
  Row: styles.wrapperRow,
  Col: styles.wrapperCol,
};

export const ImagedListItem = memo(
  ({
    imgWrapper,
    listWrapper,
    contentsStyle,
    wrapperStyle,
    count,
    subject,
    time,
    src,
    alt,
    id,
    href = '/',
  }: ImagedListItem): JSX.Element => {
    return (
      <li className="list-none" key={id}>
        <Link
          className={clsx(styles.wrapper, wrappers[listWrapper])}
          href={href}
        >
          <div className={clsx(styles.imgWrapper, imgWrappers[imgWrapper])}>
            <Image
              src={src}
              alt={alt}
              sizes={'20'}
              fill
              className={clsx(styles.imgCommon)}
              placeholder="blur"
              blurDataURL="/assets/no_image.png"
            />
          </div>
          <ListItem
            contentsStyle={contentsStyle}
            wrapperStyle={wrapperStyle}
            count={count}
            subject={subject}
            time={time}
            // likeQuantity={likeQuantity}
          />
        </Link>
      </li>
    );
  }
);
