interface ListItemProps {
  subject: string;
  time?: string;
}

export const ListItem = ({ subject, time }: ListItemProps) => {
  //날짜
  //제목
  //찜,별점 여부
  // string의 랭스가 20자 이상이면 ...text-ellipsis overflow-hidden"
  //병합 후 가장 바깥쪽에 ALINK 컴포넌트에 감쌀 예정
  return (
    <div className="flex flex-col w-[185px] h-[116px] bg-white">
      <span>{time}</span>
      <strong className="text-xl leading-8 font-semibold h-16 bg-emerald-500 line-clamp-2 text-ellipsis whitespace-normal overflow-hidden ">
        {subject}
      </strong>
    </div>
  );
};
