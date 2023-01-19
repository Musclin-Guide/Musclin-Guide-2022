import { ButtonHTMLAttributes } from 'react';
import moreListStyle from '@components/MoreList/MoreList.module.css';

interface MoreListProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const MoreList = ({ text, ...props }: MoreListProps): JSX.Element => {
  return (
    <div className={moreListStyle.MoreList}>
      <button className={moreListStyle.MoreButton} {...props}>
        {text}
      </button>
    </div>
  );
};
