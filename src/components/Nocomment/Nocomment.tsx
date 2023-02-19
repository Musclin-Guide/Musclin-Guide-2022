import { memo } from 'react';

const Nocomment = memo(function Nocomment() {
  return (
    <div role={'no_comment'} className={'mt-24 text-center'}>
      <span className="text-neutral-400">아직 작성된 댓글이 없어요!</span>
    </div>
  );
});

export default Nocomment;
