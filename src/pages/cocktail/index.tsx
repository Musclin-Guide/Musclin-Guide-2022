import { Spinners } from '@components/Spinner/index';
import { date } from '@utils/dateCalculate';
import { Layout, LayoutProps } from '@components/Layout/Layout';
import { useState, useEffect, useRef, MutableRefObject, Key } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';
import { loginState } from '@atoms/Login';
import { useRecoilState } from 'recoil';
import dynamic from 'next/dynamic';
import { ImagedListItem } from '@components/ImagedListItem/ImagedListItem';

// import SearchSection from '@components/SearchSection/SearchSection';

export { loginState } from '@atoms/Login';

const SearchSection = dynamic(() =>
  import('@components/SearchSection/SearchSection').then(
    (module) => module.default
  )
);

function CocktailPage() {
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const [fromPage, setFormPage] = useState(0);
  const [toPage, setToPage] = useState(2);
  const result = (router.query.re as string) || '';
  const [loading, setLoading] = useState(false); // 로딩 성공, 실패
  // const { data, isLoading } = useQuery(['Articles'], () => getData(), {
  //   staleTime: 5000, // 5초
  //   cacheTime: Infinity, // 제한 없음
  // });
  const [item, setItem] = useState<any[]>([]); // 페이지아이템 담기 위해;

  async function getData() {
    const { data } = await supabase
      .from('cocktail')
      .select('*')
      .order('article_number', { ascending: false })
      .range(fromPage, toPage);
    setItem((prev) => prev.concat(data));
    setFormPage(fromPage + 1);
    console.log(data);
  }

  useEffect(() => {
    let observer: IntersectionObserver;

    if (targetRef.current) {
      const onIntersect = async (
        [entry]: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await getData();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [targetRef]);

  return (
    <Layout className="s-center" subject={'칵테일페이지입니다'}>
      <SearchSection />
      {item &&
        item
          .slice(0)
          .map(
            (item: {
              article_number: Key | null | undefined;
              subject: string;
              cocktail_uuid: any;
              created_at: string | number | Date;
              like: number;
            }) => {
              return (
                <ImagedListItem
                  key={item.article_number}
                  id={item.subject}
                  href={{
                    pathname: `/cocktail/post/${result}`,
                    query: {
                      id: item.cocktail_uuid,
                    },
                  }}
                  contentsStyle="Row"
                  imgWrapper="Row"
                  listWrapper="Row"
                  subject={item.subject}
                  time={date(Number(new Date(item.created_at)))}
                  count={item.like}
                  wrapperStyle="Row"
                  src={'/assets/no_image.png'}
                  alt={`${item.subject}에 대한 게시물입니다.`}
                />
              );
            }
          )}

      <Spinners ref={targetRef} />
    </Layout>
  );
}

export default CocktailPage;
