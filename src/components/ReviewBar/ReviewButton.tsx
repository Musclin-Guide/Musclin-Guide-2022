import { ALink } from '@components/ReviewBar/Alink';
import clsx from 'clsx';
import styles from '@components/ReviewBar/ReviewButton.module.css';

interface ReviewButtonProps {
  number: number;
  listName: string;
  className?: string;
  [key: string]: any;
}

export const ReviewButton = ({
  number,
  listName,
  className,
  href = '/',
  ...props
}: ReviewButtonProps) => {
  return (
    <>
      <li className="list-none">
        <ALink
          href={href}
          className={clsx(styles.aLink, className)}
          isExternal={false}
          {...props}
        >
          <b className="text-xl">{number}</b>
          <span className="text-neutral-300 ">{listName}</span>
        </ALink>
      </li>
    </>
  );
};
