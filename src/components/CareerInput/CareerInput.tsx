import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from '@components/CareerInput/CareerInput.module.css';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export const CAREERNUMBER = [
  '1년 미만',
  '1 년',
  '2 년',
  '3 년',
  '4 년',
  '5 년',
  '6 년',
  '7년 이상',
];
export const empty = [];

interface CareerInputSelectProps {
  children?: ReactNode;
  formName?: string;
  selectName: string;
  className?: string;
  List?: string[] | number[];
  text?: string;
  id?: string | undefined;
  disabled?: boolean | undefined;
  register?: UseFormRegister<FieldValues>;
  // [key: string]: unknown;
}
export const CareerInput = ({
  selectName,
  className,
  text,
  register,
  id,
  disabled = false,
  ...props
}: CareerInputSelectProps) => {
  return (
    <div className={styles.wrapper}>
      <label className="sr-only">`${id}`(을/를) 선택해주세요</label>
      <select
        disabled={disabled}
        id={id}
        className={clsx(styles.select, className)}
        name={selectName}
        {...(register && register(selectName))}
        {...props}
      >
        {CAREERNUMBER.map((number) => {
          return (
            <option
              id={`${id}_${number}`}
              key={number.toString()}
              value={number.toString()}
              {...props}
            >
              {number}
            </option>
          );
        })}
      </select>

      {/* <p className="text-sm text-neutral-900">{text}</p> */}
    </div>
  );
};
