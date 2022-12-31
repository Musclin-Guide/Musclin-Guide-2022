import { Story, Meta } from '@storybook/react';
import { MyPagSubBar } from '@components/MypageSubBar/MypageSubBar';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/Mypage',
  component: MyPagSubBar,
  // argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <MyPagSubBar></MyPagSubBar>;

export const SubTabBar = Template.bind({});
SubTabBar.storyName = 'MyPageSubBar';
SubTabBar.args = {
  className: '',
  text: '테스트',
};

addFigmaToken(
  SubTabBar,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=132%3A12448&t=z7FiGGI5b6rRjKgE-4'
);
