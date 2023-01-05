import { Story, Meta } from '@storybook/react';
import { ListItem } from '@components/ListItem/ListItem';

export default {
  title: 'Components/ListItem ',
  component: ListItem,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ListItem
    time={args.time}
    subject={args.subject}
    likeQuantity={args.likeQuantity}
    wishQuantity={args.wishQuantity}
    contentsStyle={args.contentsStyle}
    wrapperStyle={args.wrapperStyle}
  />
);

export const IMGCONTENTS = Template.bind({});
