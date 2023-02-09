import ItemStyle from '@components/CommentList/CommentListItem/CommentListItem.module.css';
import { useMemo } from 'react';
export interface CommentListItemProps {
  writer: string;
  date: string | number;
  comment: string;
}
export const CommentListItem = ({
  writer,
  date,
  comment,
}: CommentListItemProps): JSX.Element => {
  //DB에 작성시간 나와있어요..
  // const dateString = useMemo(
  //   () =>
  //     `${date.getFullYear()}/${
  //       date.getMonth() + 1
  //     }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
  //   [date]
  // );
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
