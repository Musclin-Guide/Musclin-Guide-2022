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
