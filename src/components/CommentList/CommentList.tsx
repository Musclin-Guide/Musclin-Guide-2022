import {
  CommentListItem,
  CommentListItemProps,
} from '@components/CommentList/CommentListItem/CommentListItem';
interface CommentListProps {
  comments: CommentListItemProps[];
}

export const CommentList = ({ comments }: CommentListProps): JSX.Element => {
  return (
    <div className={'flex flex-col w-[360px]'}>
      {comments.map(({ comment, date, writer }) => (
        <CommentListItem
          key={date.getTime()}
          comment={comment}
          date={date}
          writer={writer}
        ></CommentListItem>
      ))}
    </div>
  );
};
