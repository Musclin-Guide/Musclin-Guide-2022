import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/CareerInput/CareerButton.module.css';

interface CareerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  title?: string;
  icon?: ReactNode;
}

export const CareerButton = ({
  className,
  type = 'button',
  title,
  icon,
  ...props
}: CareerButtonProps) => {
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
