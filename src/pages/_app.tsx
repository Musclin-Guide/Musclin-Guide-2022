// import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import {
  createBrowserSupabaseClient,
  Session,
} from '@supabase/auth-helpers-nextjs';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { StrictMode, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient());

  {
    /* <QueryClientProvider client={queryClient}> */
  }
  {
    /* <Hydrate state={pageProps.dehydratedState}> */
  }
  {
    /* </Hydrate> */
  }
  {
    /* </QueryClientProvider> */
  }
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
