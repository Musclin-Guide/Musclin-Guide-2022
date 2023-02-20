import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { Path, useController, useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

interface IRHInput<FormType extends object>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormType>;
  rules?: RegisterOptions<FormType>;
}

export function RHInput<FormType extends object>({
  name,
  rules,
  ...rest
}: PropsWithChildren<IRHInput<FormType>>) {
  const { control } = useFormContext<FormType>();
  const { field } = useController({
    name,
    control,
    rules,
  });

  return (
    <input
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      ref={field.ref}
      {...rest}
    />
  );
}
