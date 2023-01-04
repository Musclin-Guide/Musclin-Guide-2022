import { Story, Meta } from '@storybook/react';
import { Checkbox } from '@components/Checkbox/Checkbox';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ Checkbox',
  component: Checkbox,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Checkbox className={args.className} name={args.name} />
);

export const Primary = Template.bind({});
