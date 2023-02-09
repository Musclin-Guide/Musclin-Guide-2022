export const getDate = (timestamp: number) => {
  const timeStamp = new Date(timestamp);
  const getFullYear = timeStamp.getFullYear();
  const getMonth = timeStamp.getMonth();
  const getDay = timeStamp.getDay();

  return `${getFullYear}/${getMonth}/${getDay}`;

  // new Date(
  //                         comment.created_at
  //                       ).getFullYear()}/${new Date(
  //                         comment.created_at
  //                       ).getMonth()}/${new Date(comment.created_at).getDay()}`}
  //                       comment={comment.body_comment
};
