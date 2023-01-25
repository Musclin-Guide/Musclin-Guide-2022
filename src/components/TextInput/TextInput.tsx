import textInputStyle from '@components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: boolean;
  placeHolder?: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  name: string;
  errors?: FieldErrors;
  validationSchema?: RegisterOptions;
}
export const TextInput = ({
  name,
  label = true,
  placeHolder = '',
  required = false,
  type = 'text',
  register,
  errors,
  validationSchema,
  ...props
}: TextInputProps) => {
  return (
    <div className={textInputStyle.TextInput}>
      {label && (
        <label htmlFor={name} className={textInputStyle.Label}>
          {name}
          {required && ' *'}
        </label>
      )}
      <input
        className={clsx(textInputStyle.Input, 'primaryFocusVisible')}
        type={type}
        id={name}
        placeholder={placeHolder}
        {...(register && register(name, validationSchema))}
        {...props}
      />
      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => {
            return <p className={textInputStyle.ValidError}>{message}</p>;
          }}
        />
      )}
    </div>
  );
};
