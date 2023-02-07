import { Story, Meta } from '@storybook/react';
import { Header } from '@components/Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return <Header subject={args.subject} />;
};

export const HEADER = Template.bind({});
