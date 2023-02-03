import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import {
  createBrowserSupabaseClient,
  Session,
} from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { StrictMode, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Component {...pageProps} />
      {/* </Hydrate> */}
      {/* </QueryClientProvider> */}
    </RecoilRoot>
  );
}
