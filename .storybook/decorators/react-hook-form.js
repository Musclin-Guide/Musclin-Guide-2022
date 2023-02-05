import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';

export const StorybookFormDecorator = (Story) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
      >
        <Story />
      </form>
    </FormProvider>
  );
};
