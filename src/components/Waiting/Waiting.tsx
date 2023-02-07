import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import Head from 'next/head';

export function Waiting() {
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
      <NoFooterLayout subject={'로딩중입니다. 잠시만 기다려주세요'}>
        <div className="spinnerRolling">
          <div className={'spinner'}>
            <div></div>
          </div>
        </div>
        <h1 className="text-center">
          Loading...
          <br /> 잠시만 기다려주세요
        </h1>
      </NoFooterLayout>
    </>
  );
}
