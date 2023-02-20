import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { Path, useController, useFormContext } from 'react-hook-form';

interface IRHInput<FormType> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormType>;
}

export function RHInput<FormType extends object>({
  name,
  className,
}: PropsWithChildren<IRHInput<FormType>>) {
  const { control } = useFormContext<FormType>();
  const { field } = useController({
    name,
    control,
  });

  return (
    <input
      className={className}
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      ref={field.ref}
    />
  );
}
