import { Story, Meta } from '@storybook/react';
import { MyPagSubBar } from '@components/MypageSubBar/MypageSubBar';

export default {
  title: 'Components/Mypage',
  component: MyPagSubBar,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <MyPagSubBar></MyPagSubBar>;

export const SubTabBar = Template.bind({});
SubTabBar.storyName = 'MyPageSubBar';
SubTabBar.args = {
  className: '',
  text: '테스트',
};
