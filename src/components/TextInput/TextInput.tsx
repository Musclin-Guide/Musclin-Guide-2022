import textInputStyle from '@components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
interface TextInputProps {
  label?: string;
  placeHolder?: string;
  value: string;
  validator?: (value: string) => { text: string; result: boolean };
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
}
export const TextInput = ({
  label,
  placeHolder,
  value,
  setValue,
  validator,
  required = false,
  type = 'text',
}: TextInputProps): JSX.Element => {
  const [validation, setValidation] = useState<{
    text: string;
    result: boolean;
  }>();
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (validator) {
        setValidation(validator(e.target.value));
      }
      setValue(e.target.value);
    },
    [setValue, validator, value]
  );
  return (
    <div className={textInputStyle.TextInput}>
      {label && (
        <label htmlFor={label} className={textInputStyle.Label}>
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        className={clsx(textInputStyle.Input, 'primaryFocusVisible')}
        type={type}
        name={label}
        id={label}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
      {validation && (
        <span
          className={
            validation.result
              ? textInputStyle.ValidationTrue
              : textInputStyle.ValidationFalse
          }
        >
          {validation.text}
        </span>
      )}
    </div>
  );
};
