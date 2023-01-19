import { ButtonHTMLAttributes } from 'react';
import moreButtonStyle from '@components/MoreButton/MoreButton.module.css';
import clsx from 'clsx';

interface MoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const MoreButton = ({
  text,
  className,
  ...props
}: MoreButtonProps): JSX.Element => {
  return (
    <button className={clsx(moreButtonStyle.MoreButton, className)} {...props}>
      {text}
    </button>
  );
};
