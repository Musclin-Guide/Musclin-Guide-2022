import { Story, Meta } from '@storybook/react';
import { ImagedListItem } from '@components/ImagedListItem/ImagedListItem';

export default {
  title: 'Components/ImagedListItem',
  component: ImagedListItem,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ImagedListItem
    subject={args.subject}
    time={args.time}
    likeQuantity={args.likeQuantity}
    wishQuantity={args.wishQuantity}
    imgWrapper={args.imgWrapper}
    listWrapper={args.listWrapper}
    contentsStyle={args.contentsStyle}
    wrapperStyle={args.wrapperStyle}
  />
);

export const Primary = Template.bind({});
Primary.storyName = 'RowStyle';
Primary.args = {
  imgWrapper: 'Row',
  listWrapper: 'Row',
  contentsStyle: 'Row',
  wrapperStyle: 'Row',
  subject: '고양이가 고양고양해서 고양시 스타필드 하남시 스타필드',
  time: '2일전',
  likeQuantity: 244,
  wishQuantity: 24,
};

export const Secondary = Template.bind({});
Secondary.storyName = 'Coltyle';
Secondary.args = {
  imgWrapper: 'Col',
  listWrapper: 'Col',
  contentsStyle: 'Col',
  wrapperStyle: 'Col',
  subject: '고양이가 고양고양해서 고양시 스타필드 하남시 스타필드',
  time: '2일전',
  likeQuantity: 244,
  wishQuantity: 24,
};
