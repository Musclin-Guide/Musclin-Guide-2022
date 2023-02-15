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

export const TextArea = forwardRef(function TextArea(
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const {
    htmlFor,
    readOnly,
    cols = 38,
    rows = 20,
    minLength = 8,
    labelname = '',
    placeholder = '최소 10자 이상 입력해주세요',
    register,
    name,
    className,
    onKeyup,
  } = props;

  return (
    <>
      <label className={clsx(TextInput.Label, 'mt-4 mb-1')} htmlFor={htmlFor}>
        {!readOnly && labelname}
      </label>
      <textarea
        {...(register && register(name))} // ->issue
        ref={ref}
        onKeyUp={onKeyup}
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
          'resize-none',
          readOnly ? 'outline-none' : 'primaryFocusVisible',
          className
        )}
      />
    </>
  );
});

// TextArea.displayName = 'TextArea';
