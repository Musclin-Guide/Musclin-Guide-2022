import textInputStyle from '@components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import {
  ChangeEvent,
  Dispatch,
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
}
export const TextInput = ({
  label,
  placeHolder,
  value,
  setValue,
  validator,
  required = false,
}: TextInputProps): JSX.Element => {
  const [validation, setValidation] = useState<{
    text: string;
    result: boolean;
  }>();
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (validator && value) {
        setValidation(validator(value));
      }
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
        type="text"
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
