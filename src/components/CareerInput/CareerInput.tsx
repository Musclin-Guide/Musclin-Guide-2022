import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/CareerInput/CareerInput.module.css';

export const ListNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const ListNumber2 = [2002, 2001, 2003, 2005];
export const empty = [];

interface CareerInputSelectProps {
  children?: ReactNode;
  formName?: string;
  selectName?: string;
  className?: string;
  List: string[] | number[];
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
      <label className="a11yHidden" htmlFor={id}>
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
        {List.map((number) => {
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
      <p className="text-neutral-900">{text}</p>
    </div>
  );
};
