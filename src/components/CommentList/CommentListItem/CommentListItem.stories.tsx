import { Meta, Story } from '@storybook/react';
import { CommentListItem } from '@components/CommentList/CommentListItem/CommentListItem';

export default {
  title: 'Components/CommentList/Item',
  component: CommentListItem,
} as Meta;

const Template: Story = (args) => {
  return (
    <div className={'w-80'}>
      <CommentListItem
        comment={args.comment}
        writer={args.writer}
        date={args.date}
      />
    </div>
  );
};

export const CommentStory = Template.bind({});
CommentStory.storyName = 'Comment';
// CommentStory.args = {
//   comment: '최고에요!',
//   writer: 'Lee',
//   date: '2022/23/23',
// };
