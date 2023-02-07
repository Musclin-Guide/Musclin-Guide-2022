import { Story, Meta } from '@storybook/react';
import { Layout } from '@components/Layout/Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <Layout subject={args.subject} />;

export const LayoutPrimary = Template.bind({});
