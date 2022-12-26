import { ImageInput } from '@components/ImageInput/ImageInput';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ImageInput',
  component: ImageInput,
} as Meta;

const Template: Story = (args) => <ImageInput></ImageInput>;

export const ImageInputStory = Template.bind({});
ImageInputStory.storyName = 'ImageInput';
ImageInputStory.args = {};

addFigmaToken(
  ImageInputStory,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7856&t=GJ8PBzCy1JW4Q2tm-4'
);
