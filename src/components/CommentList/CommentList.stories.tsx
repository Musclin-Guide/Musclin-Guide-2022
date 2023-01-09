import { Meta, Story } from '@storybook/react';
import { CommentList } from '@components/CommentList/CommentList';

export default {
  title: 'Components/CommentList',
  component: CommentList,
} as Meta;

const Template: Story = (args) => {
  return <CommentList comments={args.comments} />;
};

export const CommentsStory = Template.bind({});
CommentsStory.storyName = 'commentList';
CommentsStory.args = {
  comments: [
    {
      comment: '최고에요!',
      writer: 'Lee',
      date: new Date(),
    },
    {
      comment: '대박!',
      writer: 'SH',
      date: new Date('2022-12-25'),
    },
    {
      comment: '굿이에요!',
      writer: 'Eas',
      date: new Date('2023-01-02'),
    },
  ],
};
