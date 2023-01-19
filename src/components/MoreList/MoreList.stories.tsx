import { MoreList } from '@components/MoreList/MoreList';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/MoreList',
  component: MoreList,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <MoreList text={args.text} onClick={args.onClick}></MoreList>
);

export const MoreListStory = Template.bind({});
MoreListStory.storyName = 'MoreButton';
MoreListStory.args = {
  text: '더보기',
};

addFigmaToken(
  MoreListStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=208%3A11038&t=GJ8PBzCy1JW4Q2tm-4'
);
