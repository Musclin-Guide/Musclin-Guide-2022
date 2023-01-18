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
    <li className={clsx(styles.aLink, 'list-none', className)}>
      <b className="text-xl">{number}</b>
      <span className="text-neutral-300 ">{listName}</span>
    </li>
  );
};
