import { Story, Meta } from '@storybook/react';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';

export default {
  title: 'Components/Layout',
  component: NoFooterLayout,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <NoFooterLayout />;

export const NoFooterLayoutPrimary = Template.bind({});
