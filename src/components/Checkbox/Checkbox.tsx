import clsx from 'clsx';
import styles from '@components/Checkbox/Checkbox.module.css';

interface CheckboxProps {
  name: string;
  className: string;
}

export const Checkbox = ({ name, className }: CheckboxProps): JSX.Element => {
  return (
    <>
      <input
        className={clsx(
          styles.checkbox,
          'checked:bg-check-icon PrimaryFocus',
          className
        )}
        type="checkbox"
        name={name}
        id={name}
      />
      <label htmlFor={name}></label>
    </>
  );
};
