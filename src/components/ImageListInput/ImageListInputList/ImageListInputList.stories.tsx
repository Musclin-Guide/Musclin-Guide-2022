import { ImageListInputList } from '@components/ImageListInput/ImageListInputList/ImageListInputList';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ImageListInput/List',
  component: ImageListInputList,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ImageListInputList row={args.row}></ImageListInputList>
);

export const ListStory = Template.bind({});
ListStory.storyName = 'List';
ListStory.args = {
  row: 2,
};

addFigmaToken(
  ListStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7859&t=GJ8PBzCy1JW4Q2tm-4'
);
