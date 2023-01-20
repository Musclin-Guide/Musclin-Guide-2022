import { Meta, Story } from '@storybook/react';
import { TextInput } from '@components/TextInput/TextInput';
import { useState } from 'react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className={'w-80'}>
      <TextInput
        label={args.label}
        placeHolder={args.placeHolder}
        value={value}
        setValue={setValue}
        required={args.required}
        type={args.type}
        {...args}
      />
    </div>
  );
};

export const TextInputStory = Template.bind({});
TextInputStory.storyName = 'Default';

export const TextInputLabel = Template.bind({});
TextInputLabel.storyName = 'emailInputExample';
TextInputLabel.args = {
  required: true,
  label: 'email',
  placeHolder: 'Enter your email',
  validator: (value: string): { result: boolean; text: string } => {
    const validRegex =
      // eslint-disable-next-line no-useless-escape
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (value.match(validRegex)) {
      return {
        result: true,
        text: '이메일 형식이 맞습니다.',
      };
    }
    return {
      result: false,
      text: '이메일 형식이 틀립니다.',
    };
  },
};
