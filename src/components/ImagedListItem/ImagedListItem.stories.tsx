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
    count={args.count}
    imgWrapper={args.imgWrapper}
    listWrapper={args.listWrapper}
    contentsStyle={args.contentsStyle}
    wrapperStyle={args.wrapperStyle}
  />
);

export const RowStyle = Template.bind({});
RowStyle.storyName = 'RowStyle';
RowStyle.args = {
  imgWrapper: 'Row',
  listWrapper: 'Row',
  contentsStyle: 'Row',
  wrapperStyle: 'Row',
  subject: '고양이가 고양고양해서 고양시 스타필드 하남시 스타필드',
  time: '2일전',
  likeQuantity: 244,
  count: 24,
};

export const ColStyle = Template.bind({});
ColStyle.storyName = 'ColStyle';
ColStyle.args = {
  imgWrapper: 'Col',
  listWrapper: 'Col',
  contentsStyle: 'Col',
  wrapperStyle: 'Col',
  subject: '고양이가 고양고양해서 고양시 스타필드 하남시 스타필드',
  time: '2일전',
  likeQuantity: 244,
  count: 0,
};

export const VariationRow = () => {
  return (
    <section className="flex flex-col">
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
      <ImagedListItem
        contentsStyle="Row"
        imgWrapper="Row"
        likeQuantity={244}
        listWrapper="Row"
        subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
        time="2일전"
        wrapperStyle="Row"
        count={0}
      />
    </section>
  );
};

export const VariationCol = () => {
  return (
    <>
      <section className="flex no-wrap">
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
      </section>
      <section className="flex no-wrap">
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
      </section>
      <section className="flex no-wrap">
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
        <ImagedListItem
          contentsStyle="Col"
          imgWrapper="Col"
          likeQuantity={244}
          listWrapper="Col"
          subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
          time="2일전"
          wrapperStyle="Col"
          count={0}
        />
      </section>
    </>
  );
};
