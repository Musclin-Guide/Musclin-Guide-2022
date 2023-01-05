import clsx from 'clsx';
import styles from '@components/Checkbox/Checkbox.module.css';

interface CheckboxProps {
  name: string;
  className: string;
  checked?: boolean;
  onClick?: () => void;
}

export const Checkbox = ({
  name,
  className,
  checked,
  onClick,
}: CheckboxProps): JSX.Element => {
  return (
    <>
      <input
        checked={checked}
        className={clsx(
          styles.checkbox,
          'checked:bg-check-icon primaryFocusVisible',
          className
        )}
        type="checkbox"
        name={name}
        id={name}
        onClick={onClick}
      />
      <label htmlFor={name}></label>
    </>
  );
};
