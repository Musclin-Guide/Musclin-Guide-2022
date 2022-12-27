interface ReviewButtonProps {
  number: number;
  listName: string;
  className?: string;
}

export const ReviewButton = () => {
  return (
    <>
      <li className="inline-flex flex-col text-center bg-slate-500">
        <b>3</b>
        <span className="text-neutral-300">리뷰</span>
      </li>
    </>
  );
};
