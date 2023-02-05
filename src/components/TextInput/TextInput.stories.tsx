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
  } = useForm({ mode: 'onBlur' });
  console.log(watch());
  return (
    <form className={'w-80'}>
      <TextInput
        // errors={errors}
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
  type: 'text',
  name: 'test',
};

export const EmailStory = Template.bind({});
EmailStory.storyName = 'EmailExample';
EmailStory.args = {
  type: 'email',
  name: 'email',
  label: true,
  placeHolder: '이메일을 입력해 주세요.',
  validationSchema: {
    required: 'Required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'invalid email address',
    },
  },
  required: true,
};
