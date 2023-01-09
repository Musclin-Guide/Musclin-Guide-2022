import { Story, Meta } from '@storybook/react';
import { LikeToggleButton } from '@components/LikeToggleButton/LikeToggleButton';

export default {
  title: 'Components/LikeToggleButton',
  component: LikeToggleButton,
} as Meta;

const Template: Story = (args) => (
  <LikeToggleButton toggle={args.toggle} count={args.count}></LikeToggleButton>
);

export const LikeToggleButtonToggle = Template.bind({});
LikeToggleButtonToggle.storyName = 'Toggle=true';
LikeToggleButtonToggle.args = {
  toggle: true,
  count: 81,
};

export const LikeToggleButtonUnToggle = Template.bind({});
LikeToggleButtonUnToggle.storyName = 'Toggle=false';
LikeToggleButtonUnToggle.args = {
  toggle: false,
  count: 81,
};
