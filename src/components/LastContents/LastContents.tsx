import { ForwardedRef, forwardRef, LegacyRef } from 'react';

export const LastContents = forwardRef(function LastContents(
  _,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="text-center text-sm text-neutral-500" ref={ref}>
      마지막 페이지 입니다
    </div>
  );
});
