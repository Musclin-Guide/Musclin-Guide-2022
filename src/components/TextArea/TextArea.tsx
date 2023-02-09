/* eslint-disable react/display-name */
import TextInput from '@components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, KeyboardEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface TextAreaProps {
  htmlFor?: string;
  labelname?: string;
  register?: UseFormRegister<FieldValues>;
  readOnly?: boolean;
  cols?: number;
  rows?: number;
  minLength?: number;
  placeholder?: string;
  name: string;
  className?: string;
  onKeyup?: KeyboardEventHandler<HTMLTextAreaElement>;
}

export const TextArea = forwardRef(
  (
    {
      htmlFor,
      readOnly,
      cols = 38,
      rows = 20,
      minLength = 10,
      labelname = '내용',
      placeholder = '최소 10자 이상 입력해주세요',
      register,
      name,
      className,
      onKeyup,
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <>
        <label className={clsx(TextInput.Label, 'mt-4 mb-1')} htmlFor={htmlFor}>
          {!readOnly && labelname}
        </label>
        <textarea
          onKeyUp={onKeyup}
          ref={ref}
          readOnly={readOnly}
          required
          autoCorrect="on"
          cols={cols}
          rows={rows}
          minLength={minLength}
          placeholder={placeholder}
          id={htmlFor}
          name={name}
          className={clsx(
            TextInput.Input,
            'noresize',
            readOnly ? 'outline-none' : 'primaryFocusVisible',
            className
          )}
          {...(register && register(name))}
        />
      </>
    );
  }
);
