import { Story, Meta } from '@storybook/react';
import { SubHeader } from '@components/Header/SubHeader';

export default {
  title: 'Components/SubHeader',
  component: SubHeader,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return <SubHeader />;
};

export const SUBHEADER = Template.bind({});
