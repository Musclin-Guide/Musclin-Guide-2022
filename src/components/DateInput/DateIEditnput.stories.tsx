import { Story, Meta } from '@storybook/react';
import { DataEditInput } from '@components/DateInput/DateEditInput';

import { empty } from '@components/CareerInput/CareerInput';

export default {
  title: 'Components/EditInput',
  component: DataEditInput,
} as Meta;

const Template: Story = (args) => {
  return <DataEditInput disabled={args.disabled}></DataEditInput>;
};

export const Primary = Template.bind({});
Primary.storyName = 'DataEditInput';
