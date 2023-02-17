import { EditButton, ImagedListItem, Spinners } from '@components/index';
import styles from '@components/TextInput/TextInput.module.css';
import { date } from '@utils/dateCalculate';
import { BsSearch } from 'react-icons/all';
import { Layout } from '@components/Layout/Layout';
import { useState, useEffect, useRef, MutableRefObject, Key, use } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQuery } from 'react-query';
import { loginState } from '@atoms/Login';
import { useRecoilState } from 'recoil';
import { GetStaticProps, GetStaticPropsContext } from 'next/types';
import { NextApiHandler } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
export { loginState } from '@atoms/Login';

const inputValue = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  if (inputRef && inputRef.current !== null) {
    return inputRef.current.value;
  }
};
function CocktailPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const result = (router.query.re as string) || '';
  const [loading, setLoading] = useState(false); // 로딩 성공, 실패
  // const { data, isLoading } = useQuery(['Articles'], () => getData(), {
  //   staleTime: 5000, // 5초
  //   cacheTime: Infinity, // 제한 없음
  // });
  const [target, setTarget] = useState<HTMLElement | null>(null); // 교차상태를 판별하기 위함;
  const [item, setItem] = useState<any[]>([]); // 페이지아이템 담기 위해;

  let fromPage = 0;
  let toPage = 2;
  async function getData() {
    const { data } = await supabase
      .from('cocktail')
      .select('*')
      .order('article_number', { ascending: false })
      .range(fromPage, toPage);
    console.log(data);
    setItem((prev) => prev.concat(data));
    fromPage += 3;
    toPage += 3;
    console.log(fromPage, toPage);
  }

  useEffect(() => {
    getData();
  }, []);

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
  }, [target]);

  return (
    <Layout className="s-center" subject={'칵테일페이지입니다'}>
      <section className="flex items-center gap-2">
        <input
          className={styles.Input}
          type="text"
          placeholder="칵테일을 검색해보세요"
          ref={inputRef}
        />
        <EditButton
          size="large"
          type="button"
          onClick={() => {
            if (inputRef.current !== null && inputRef.current.value) {
              router.push({
                pathname: `/cocktail/result/${result}`,
                query: {
                  re: `${inputValue(inputRef)}`,
                },
              });
            } else {
              alert('검색어가 너무 짧습니다. 2자이상 입력해주세요.');
            }
          }}
        >
          <BsSearch className="EditButton_icon__iGeUo" />
        </EditButton>
      </section>
      <section>
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
                // console.log(item);
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

        <div>test</div>
        <Spinners ref={targetRef} />
      </section>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const { data: cocktail } = await supabase
//     .from('cocktail')
//     .select('*')
//     .order('created_at', { ascending: true });
//   // .range(0, 2);
//
//   // Pass data to the page via props
//   return { props: { cocktail: cocktail ?? [] } };
// }
//
export default CocktailPage;
