import {
  CommentListItem,
  CommentListItemProps,
} from '@components/CommentList/CommentListItem/CommentListItem';
interface CommentListProps {
  comments?: CommentListItemProps[];
  key?: string;
}

export const CommentList = ({
  comments,
  key,
}: CommentListProps): JSX.Element => {
  return (
    <div className={'flex flex-col'}>
      {comments ? (
        comments.map(({ comment, date, writer }) => (
          <CommentListItem
            key={key}
            comment={comment}
            date={date}
            writer={writer}
          ></CommentListItem>
        ))
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </div>
  );
};
