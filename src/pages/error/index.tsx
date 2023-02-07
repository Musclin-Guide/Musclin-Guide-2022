import { Button } from '@components/Button';
import { ErrorLayout } from '@components/Layout/ErrorLayout';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function error() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Musclin Guide</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>
      <ErrorLayout>
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
      </ErrorLayout>
    </>
  );
}
