import { Story, Meta } from '@storybook/react';
import { ListItem } from '@components/ListItem/ListItem';

export default {
  title: 'Components/ListItem ',
  component: ListItem,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ListItem
    id={args.id}
    time={args.time}
    subject={args.subject}
    count={args.count}
    contentsStyle={args.contentsStyle}
    wrapperStyle={args.wrapperStyle}
  />
);

export const ImgContent = Template.bind({});
