import { HiOutlineHeart } from 'react-icons/hi';
import LikeToggleButtonStyle from '@components/LikeToggleButton/LikeToggleButton.module.css';
import { ButtonHTMLAttributes } from 'react';

interface LikeToggleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  toggle: boolean;
  count: number;
}

export const LikeToggleButton = ({
  toggle,
  count,
  ...props
}: LikeToggleButtonProps): JSX.Element => {
  return (
    <button {...props} className={LikeToggleButtonStyle.LikeToggleButton}>
      <HiOutlineHeart
        size={32}
        className={
          toggle
            ? LikeToggleButtonStyle.FillHeart
            : LikeToggleButtonStyle.EmptyHeart
        }
      />
      <span
        className={
          toggle
            ? LikeToggleButtonStyle.FillText
            : LikeToggleButtonStyle.EmptyText
        }
      >
        {count}
      </span>
    </button>
  );
};
