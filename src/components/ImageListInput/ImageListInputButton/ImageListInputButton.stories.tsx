import { ImageListInputButton } from '@components/ImageListInput/ImageListInputButton/ImageListInputButton';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/ImageListInput/Button',
  component: ImageListInputButton,
  argTypes: { onchange: { action: 'change' } },
} as Meta;

const Template: Story = (args) => (
  <ImageListInputButton size={args.size}></ImageListInputButton>
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.storyName = 'ButtonPrimary';
ButtonPrimary.args = {
  size: 'primary',
};
export const ButtonSmall = Template.bind({});
ButtonSmall.storyName = 'ButtonSmall';
ButtonSmall.args = {
  size: 'small',
};
addFigmaToken(
  ButtonPrimary,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7850&t=2YQHwwS6LdNPrrw0-4'
);
