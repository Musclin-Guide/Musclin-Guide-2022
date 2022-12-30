import { Story, Meta } from '@storybook/react';
import { MyPageButton } from '@components/MypageSubBar/MypageSubBar';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/Mypage',
  component: MyPageButton,
  // argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <MyPageButton>{args.content}</MyPageButton>;

export const SubTabButton = Template.bind({});
SubTabButton.storyName = 'SubButton';
SubTabButton.args = {
  content: '테스트',
};
