import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import { Story, Meta } from '@storybook/react';
import { addFigmaToken } from '@utils/addFigmaToken';
import { useState } from 'react';

export default {
  title: 'Components/ImageInputList/Button',
  component: ImageInputButton,
  argTypes: { onchange: { action: 'change' } },
} as Meta;

const Template: Story = (args) => {
  const formData = new FormData();
  const [datas, setDatas] = useState<File[]>();
  return (
    <ImageInputButton
      size={args.size}
      formData={formData}
      file={args.file}
      setDatas={setDatas}
    ></ImageInputButton>
  );
};

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
