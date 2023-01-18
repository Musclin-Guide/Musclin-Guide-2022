import { Story, Meta } from '@storybook/react';
import { NomalEditInput } from '@components/NomalEditInput/NomalEditInput';

export default {
  title: 'Components/EditInput',
  component: NomalEditInput,
} as Meta;

const Template: Story = (args) => {
  return <NomalEditInput disabled={args.disabled}></NomalEditInput>;
};

export const NomalEdit = Template.bind({});
NomalEdit.storyName = 'NomalEditInput';
NomalEdit.args = {
  disabled: false,
  className: '',
  type: 'email',
  name: 'user_email',
};
