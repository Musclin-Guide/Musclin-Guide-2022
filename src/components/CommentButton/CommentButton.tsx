import clsx from 'clsx';

export default function CommentButton() {
  return (
    <>
      <button
        type="submit"
        className={clsx('absolute right-2 top-7 text-sm', 'text-neutral-500')}
        color="Outline"
      >
        등록
      </button>
    </>
  );
}
