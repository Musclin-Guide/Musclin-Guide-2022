import { Html, Head, Main, NextScript } from 'next/document';
// import SupabaseListener from '@components/supabase-listener/supabase-listener';
// import createClient from '@lib/supabase/supabase-server';

// export const revalidate = 0;

export default function RootLayout() {
  //   const supabase = createClient();
  //
  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();
  return (
    <Html lang="ko-KR">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          as="style"
          rel="stylesheet"
          crossOrigin={'crossorigin'}
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <link rel="icon" href="/public/assets/favicon.ico" sizes="16x16" />
      </Head>

      <body>
        {/* <SupabaseListener accessToken={session?.access_token} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
