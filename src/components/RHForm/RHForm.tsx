import { DevTool as RHFDevTool } from '@hookform/devtools';
import React, { FormEventHandler, PropsWithChildren } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface IRHForm<FormType extends object> {
  onSubmit: SubmitHandler<FormType>;
  onInvalid?: SubmitErrorHandler<FormType>;
  onReset?: FormEventHandler<HTMLFormElement>;
}

export function RHForm<FormType extends object>({
  children,
  onSubmit,
  onReset,
  onInvalid,
}: PropsWithChildren<IRHForm<FormType>>) {
  const methods = useForm<FormType>();

  return (
    <FormProvider {...methods}>
      <form
        onReset={onReset}
        onSubmit={methods.handleSubmit(onSubmit, onInvalid)}
      >
        {children}
      </form>
      {process.env.NODE_ENV !== 'production' && (
        <RHFDevTool control={methods.control} />
      )}
    </FormProvider>
  );
}
