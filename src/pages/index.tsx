import Head from 'next/head';
import { Button } from '@components/Button';
import { ImagedListItem } from '@components/ImagedListItem';
import { Layout } from '@components/Layout/Layout';
import styles from '@pages/homepage.module.css';
import { supabase } from '@lib/supabase';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import clsx from 'clsx';

async function getCocktails() {
  const { data: cocktail } = await supabase
    .from('cocktail')
    .select('*')
    .order('like', { ascending: false })
    .limit(3);
  return cocktail;
}

export default function Home() {
  const [cocktail, setCocktail] = useState();
  const { data, isLoading } = useQuery(['Articles'], () => getCocktails());
  const router = useRouter();

  return (
    <div>
      {/* <Head>
        <title>홈 페이지</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head> */}
      <Layout subject="머슬랭 가이드 홈페이지 입니다" className="s-center">
        <div className={styles.Contents}>
          <section className={styles.Section}>
            <div className={styles.CocktailHeader}>
              <h2 className={styles.Title}>인기 칵테일</h2>
              <Button
                color="White"
                size="base"
                onClick={() => router.push('/cocktail')}
              >
                더보기
              </Button>
            </div>
            <div>
              <ul className={styles.Cocktail}>
                {data &&
                  data.map((cocktail) => (
                    <ImagedListItem
                      key={cocktail.article_number}
                      subject={cocktail.article}
                      likeQuantity={cocktail.like}
                      imgWrapper="Row"
                      listWrapper="Row"
                      href={''}
                      src={'/assets/demo.jpeg'}
                      count={0}
                    ></ImagedListItem>
                  ))}
              </ul>
            </div>
          </section>
          <section className={styles.Section}>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductHeader}>
                <h2 className={styles.Title}>추천 제품</h2>
                <Button
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
            <div>
              <ul className={clsx(styles.Product)}>
                <ImagedListItem
                  contentsStyle="Row"
                  imgWrapper="Row"
                  likeQuantity={244}
                  listWrapper="Row"
                  subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                  time="2일전"
                  wrapperStyle="Row"
                  count={0}
                  href={''}
                  src={'/assets/demo.jpeg'}
                />
                <ImagedListItem
                  contentsStyle="Row"
                  imgWrapper="Row"
                  likeQuantity={244}
                  listWrapper="Row"
                  subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                  time="2일전"
                  wrapperStyle="Row"
                  count={0}
                  href={''}
                  src={'/assets/demo.jpeg'}
                />

                <ImagedListItem
                  contentsStyle="Row"
                  imgWrapper="Row"
                  likeQuantity={244}
                  listWrapper="Row"
                  subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                  time="2일전"
                  wrapperStyle="Row"
                  count={0}
                  href={''}
                  src={'/assets/demo.jpeg'}
                />
                <ImagedListItem
                  contentsStyle="Row"
                  imgWrapper="Row"
                  likeQuantity={244}
                  listWrapper="Row"
                  subject="고양이가 고양고양해서 고양시 스타필드 하남시 스타필드"
                  time="2일전"
                  wrapperStyle="Row"
                  count={0}
                  href={''}
                  src={'/assets/demo.jpeg'}
                />
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
