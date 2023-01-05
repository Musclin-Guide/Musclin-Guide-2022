import { Story, Meta } from '@storybook/react';
import { ListItem } from '@components/ListItem/ListItem';

export default {
  title: 'Components/ListItem ',
  component: ListItem,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ListItem time={args.time} subject={args.subject} />
);

export const IMGCONTENTS = Template.bind({});
