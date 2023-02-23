import { NoAccessError } from '@components/Error/Error';
import { ErrorLayout } from '@components/Layout/ErrorLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Error() {
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
      <ErrorLayout subject={'접근 불가한 페이지입니다.'}>
        <NoAccessError />
      </ErrorLayout>
    </>
  );
}
