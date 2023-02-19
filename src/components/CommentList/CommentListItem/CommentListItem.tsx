import ItemStyle from '@components/CommentList/CommentListItem/CommentListItem.module.css';
export interface CommentListItemProps {
  writer: string;
  date: string | number;
  comment: string;
  onClick?: () => void;
}
export const CommentListItem = ({
  writer,
  date,
  comment,
  onClick,
}: CommentListItemProps): JSX.Element => {
  return (
    <div className={ItemStyle.CommentListItem}>
      <div className={ItemStyle.Info}>
        <span className={ItemStyle.Writer}>{writer}</span>
        <span className={ItemStyle.Date}>{date}</span>
      </div>
      <p className={ItemStyle.Comment}>{comment}</p>
    </div>
  );
};
