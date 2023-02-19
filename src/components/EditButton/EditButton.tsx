import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/EditButton/EditButton.module.css';

interface EditButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  size?: 'small' | 'large';
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const sizes = {
  small: styles.button,
  large: styles.buttonlg,
};

export const EditButton = ({
  type = 'button',
  title,
  icon,
  size = 'small',
  children,
  ...props
}: EditButtonProps) => {
  // const { htmlfor } = props;
  return (
    <button
      type={type}
      title={title}
      className={clsx(
        sizes[size],
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-accent'
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
