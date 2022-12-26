import { RowImageListInputSmall } from '@components/ImageListInput/RowImageListInput/Small/RowImageListInputSmall';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ImageListInput/RowList/Small',
  component: RowImageListInputSmall,
} as Meta;

const Template: Story = (args) => (
  <RowImageListInputSmall></RowImageListInputSmall>
);

export const RowListSmallStory = Template.bind({});
RowListSmallStory.storyName = 'Small';
RowListSmallStory.args = {};

addFigmaToken(
  RowListSmallStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=105%3A11753&t=GJ8PBzCy1JW4Q2tm-4'
);
