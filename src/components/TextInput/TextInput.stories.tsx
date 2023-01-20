import { Meta, Story } from '@storybook/react';
import { TextInput } from '@components/TextInput/TextInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story = (args) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors.test);
  console.log(watch());
  return (
    <form className={'w-80'}>
      <TextInput
        value={args.value}
        onChange={args.onChange}
        errors={errors}
        label={args.label}
        placeHolder={args.placeHolder}
        required={args.required}
        type={args.type}
        name={args.name}
        validationSchema={args.validationSchema}
        register={register}
      />
    </form>
  );
};

export const TextInputStory = Template.bind({});
TextInputStory.storyName = 'Default';
TextInputStory.args = {
  type: 'email',
  name: 'test',
  placeHolder: '테스트용',
  validationSchema: {
    required: 'Required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'invalid email address',
    },
  },
};
