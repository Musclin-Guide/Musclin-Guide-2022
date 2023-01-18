import { Story, Meta } from '@storybook/react';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';

export default {
  title: 'Components/Layout',
  component: SubHeaderLayout,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <SubHeaderLayout />;

export const SubHeaderLayoutPrimary = Template.bind({});
