import { MoreButton } from '@components/MoreButton/MoreButton';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/MoreButton',
  component: MoreButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <MoreButton text={args.text} onClick={args.onClick}></MoreButton>
);

export const MoreButtonStory = Template.bind({});
MoreButtonStory.storyName = 'MoreButton';
MoreButtonStory.args = {
  text: '더보기',
};

addFigmaToken(
  MoreButtonStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=168%3A15318&t=GJ8PBzCy1JW4Q2tm-4'
);
