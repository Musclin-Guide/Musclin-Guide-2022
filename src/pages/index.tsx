import dynamic from 'next/dynamic';
import styles from '@pages/homepage.module.css';
import { supabase } from '@lib/supabase';
import { Key, useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { date } from '@utils/dateCalculate';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/Login';
import type { LayoutProps } from '@components/Layout/Layout';

const Layout = dynamic<LayoutProps>(() =>
  import('@components/Layout/Layout').then((module) => module.Layout)
);
const ImagedListItem = dynamic(() =>
  import('@components/ImagedListItem/index').then(
    (module) => module.ImagedListItem
  )
);
const Button = dynamic(() =>
  import('@components/Button/index').then((module) => module.Button)
);

export default function Home({ cocktail }: { cocktail: any }) {
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  useEffect(() => {
    async function isLoginUser() {
      const { data } = await supabase.auth.getSession();
      if (data.session?.access_token) {
        setLoggedIn(true);
      }
    }
    isLoginUser();
  }, []);

  const router = useRouter();
  const result = (router.query.id as string[]) || [];

  return (
    <>
      <Layout subject="머슬랭 가이드 홈페이지 입니다" className="s-center">
        <div className={styles.Contents}>
          <section className={styles.Section}>
            <div className={styles.CocktailHeader}>
              <h2 className={styles.Title}>인기 칵테일</h2>
              <Button
                name="moreCocktailContents"
                color="White"
                size="base"
                onClick={() => router.push('/cocktail')}
              >
                더보기
              </Button>
            </div>
            <div>
              <ul className={styles.Cocktail}>
                {cocktail &&
                  cocktail.map(
                    (cocktail: {
                      article_number: Key | null | undefined;
                      subject: string | undefined;
                      created_at: string | number | Date;
                      cocktail_uuid: string | number | boolean;
                      like: number;
                    }) => (
                      <ImagedListItem
                        key={cocktail.article_number}
                        id={`${cocktail.article_number}`}
                        subject={cocktail.subject}
                        time={date(Number(new Date(cocktail.created_at)))}
                        imgWrapper="Row"
                        listWrapper="Row"
                        href={{
                          pathname: `/cocktail/post/${result}`,
                          query: {
                            id: encodeURIComponent(cocktail.cocktail_uuid),
                          },
                        }}
                        src={'/assets/no_image.png'}
                        count={cocktail.like}
                        alt={`${cocktail.subject}에 대한 게시물입니다.`}
                      />
                    )
                  )}
              </ul>
            </div>
          </section>
          <section className={clsx(styles.Section, 'relative')}>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductHeader}>
                <h2 className={styles.Title}>추천 제품</h2>
                <Button
                  name="moreProductContents"
                  color="White"
                  size="base"
                  onClick={() => router.push('/search')}
                >
                  더보기
                </Button>
              </div>
              <p className={styles.InfoText}>
                유저정보를 바탕으로 선정된 추천 제품입니다.
              </p>
            </div>

            <ul
              className={clsx(
                styles.Product,

                'pointer-events-none blur-md noselect -z-40'
              )}
            >
              <ImagedListItem
                contentsStyle="Col"
                imgWrapper="Col"
                likeQuantity={244}
                listWrapper="Col"
                subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                time="크레아틴"
                wrapperStyle="Col"
                count={0}
                href={''}
                src={'/assets/demo.jpeg'}
                alt={''}
                id={'item1'}
              />
              <ImagedListItem
                contentsStyle="Col"
                imgWrapper="Col"
                likeQuantity={244}
                listWrapper="Col"
                subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                time="크레아틴"
                className="float-right"
                wrapperStyle="Col"
                count={0}
                href={''}
                src={'/assets/demo.jpeg'}
                alt={''}
                id={'item2'}
              />
            </ul>

            <section className="flex flex-col h-32 rounded-md justify-center items-center text-center z-10">
              <h2>더 많은 정보를 얻고싶다면?</h2>
              <Button size="base">로그인하러가기</Button>
            </section>
          </section>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const { data: cocktail } = await supabase
    .from('cocktail')
    .select('*')
    .order('like', { ascending: false })
    .limit(3);

  // Pass data to the page via props
  return {
    props: {
      cocktail: cocktail ?? [],
    },
  };
};
