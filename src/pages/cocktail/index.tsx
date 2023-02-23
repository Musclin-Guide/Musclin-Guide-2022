import { Layout, LayoutProps } from '@components/Layout/Layout';
import { useState, useEffect, useRef, MutableRefObject, Key } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';
import { loginState } from '@atoms/Login';
import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';
// import { CocktailList } from '@components/CocktailList/CocktailList';

export { loginState } from '@atoms/Login';

const SearchSection = dynamic(() =>
  import('@components/SearchSection/SearchSection').then(
    (module) => module.default
  )
);

function CocktailPage() {
  //   useEffect(() => {
  //     let observer: IntersectionObserver;
  //
  //     if (targetRef.current) {
  //       const onIntersect = async (
  //         [entry]: IntersectionObserverEntry[],
  //         observer: IntersectionObserver
  //       ) => {
  //         if (entry.isIntersecting) {
  //           observer.unobserve(entry.target);
  //           await getData();
  //           observer.observe(entry.target);
  //         }
  //       };
  //       observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //       observer.observe(targetRef.current);
  //     }
  //     return () => observer && observer.disconnect();
  //   }, [targetRef]);

  return (
    <Layout className="s-center" subject={'칵테일페이지입니다'}>
      <SearchSection />
      {/* <CocktailList /> */}
    </Layout>
  );
}
