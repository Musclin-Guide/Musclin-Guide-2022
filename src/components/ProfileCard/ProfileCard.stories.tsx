import { Story, Meta } from '@storybook/react';
import { ProfileCard } from '@components/ProfileCard/ProfileCard';

export default {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ProfileCard userCareer={args.userCareer} userName={args.userName} />
);

export const Primary = Template.bind({});

Primary.storyName = 'demouser1';
Primary.args = {
  userName: '김삿갓2',
  userCareer: '2',
};
