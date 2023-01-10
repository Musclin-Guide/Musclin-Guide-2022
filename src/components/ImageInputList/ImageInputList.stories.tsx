import { ImageInputList } from '@components/ImageInputList/ImageInputList';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/ImageInputList/List',
  component: ImageInputList,
} as Meta;

const Template: Story = (args) => {
  // const [images, setImages] = useState<{ key: string; value: File }[]>();
  const formData = new FormData();
  return (
    <ImageInputList
      formData={formData}
      size={args.size}
      remit={args.remit}
      {...args}
    />
  );
};

export const ListPrimary = Template.bind({});
ListPrimary.storyName = 'Primary';
ListPrimary.args = {
  remit: 6,
  size: 'primary',
};

export const ListSmall = Template.bind({});
ListSmall.storyName = 'Small';
ListSmall.args = {
  remit: 6,
  size: 'small',
};
