import { DevTool } from '@hookform/devtools';
import React, { FormEventHandler, PropsWithChildren, useCallback } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface IRHForm<FormType extends object> {
  onValid: SubmitHandler<FormType>;
  onInvalid?: SubmitErrorHandler<FormType>;
  onReset?: FormEventHandler<HTMLFormElement>;
}

export function RHForm<FormType extends object>({
  children,
  onValid,
  onReset,
  onInvalid,
}: PropsWithChildren<IRHForm<FormType>>) {
  const methods = useForm<FormType>();
  const handleReset = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      methods.reset();
      if (onReset) {
        onReset(e);
      }
    },
    [methods, onReset]
  );

  return (
    <FormProvider {...methods}>
      <form
        onReset={handleReset}
        onSubmit={methods.handleSubmit(onValid, onInvalid)}
      >
        {children}
      </form>
      {process.env.NODE_ENV !== 'production' && (
        <DevTool control={methods.control} />
      )}
    </FormProvider>
  );
}
