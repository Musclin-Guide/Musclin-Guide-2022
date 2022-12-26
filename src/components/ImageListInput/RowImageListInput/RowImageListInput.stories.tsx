import { RowImageListInput } from '@components/ImageListInput/RowImageListInput/RowImageListInput';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ImageListInput/RowList',
  component: RowImageListInput,
} as Meta;

const Template: Story = (args) => <RowImageListInput></RowImageListInput>;

export const RowListStory = Template.bind({});
RowListStory.storyName = 'RowList';
RowListStory.args = {};

addFigmaToken(
  RowListStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7856&t=GJ8PBzCy1JW4Q2tm-4'
);
