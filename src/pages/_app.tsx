import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { supabase } from '@lib/supabase';

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionContextProvider>
  );
}
