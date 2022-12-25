import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/EditButton/EditButton.module.css';

interface EditButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  title?: string;
  icon?: ReactNode;
}

export const EditButton = ({
  className,
  type = 'button',
  title,
  icon,
  ...props
}: EditButtonProps) => {
  return (
    <button
      type={type}
      title={title}
      className={clsx(className, styles.button, 'Primaryfocus__test')}
      {...props}
    >
      {icon}
    </button>
  );
};
