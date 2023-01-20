import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/CareerInput/CareerInput.module.css';

export const CAREERNUMBER = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
export const empty = [];

interface CareerInputSelectProps {
  children?: ReactNode;
  formName?: string;
  selectName?: string;
  className?: string;
  List?: string[] | number[];
  text?: string;
  id?: string | undefined;
  disabled?: boolean | undefined;
  [key: string]: string | number | ReactNode | boolean | undefined;
}
export const CareerInput = ({
  selectName,
  formName = 'UserEdit',
  className,
  text,
  List,
  id,
  disabled = false,
  ...props
}: CareerInputSelectProps) => {
  return (
    <div className={styles.wrapper}>
      <label className="sr-only" htmlFor={id}>
        `${id}`(을/를) 선택해주세요
      </label>
      <select
        disabled={disabled}
        aria-expanded={false}
        role="combobox"
        id={id}
        className={clsx(styles.select, className)}
        name={selectName}
        form={formName}
        {...props}
      >
        {CAREERNUMBER.map((number) => {
          return (
            <option
              id={`${id}_${number}`}
              key={number.toString()}
              value={number}
              {...props}
            >
              {number}
            </option>
          );
        })}
      </select>
      <input type="hidden" name="input" />
      <p className="text-sm text-neutral-900">{text}</p>
    </div>
  );
};
