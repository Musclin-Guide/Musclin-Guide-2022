import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { supabase } from '@lib/supabase';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

// <Auth.UserContextProvider supabaseClient={supabase}>
//   <Container supabaseClient={supabase}>
//     <Auth providers={['facebook', 'github']} supabaseClient={supabase}/>
//   </Container>
// </Auth.UserContextProvider>
