import { Button } from '@components/Button/index';

import { useRouter } from 'next/router';

export function NoAccessError() {
  const router = useRouter();
  return (
    <>
      <h1 className="text-center mt-40 mb-40">
        <strong className="text-xl text-state-negative">
          Sorry..
          <br />
        </strong>
        접근 불가한 페이지입니다
      </h1>
      <Button className="w-full" onClick={() => router.push('/')}>
        홈으로 돌아가기
      </Button>
    </>
  );
}
