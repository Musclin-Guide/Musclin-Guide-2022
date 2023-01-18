import { Story, Meta } from '@storybook/react';
import { ListPlacehoder } from '@components/ListPlaceholder/ListPlacehoder';

export default {
  title: 'Components/ListPlacehoder',
  component: ListPlacehoder,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = () => <ListPlacehoder />;

export const Primary = Template.bind({});
