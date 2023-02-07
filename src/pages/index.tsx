import Head from 'next/head';
import { FeaturedSlideList } from '@components/FeaturedSlide';
import { Button } from '@components/Button';
import { ImagedListItem } from '@components/ImagedListItem';
import { Layout } from '@components/Layout/Layout';
import styles from '@pages/homepage.module.css';
import { supabase } from '@lib/supabase';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

async function getCocktails() {
  const { data: cocktail } = await supabase
    .from('cocktail')
    .select(`*`)
    .order('like', { ascending: false })
    .limit(3);
  return cocktail;
}

export default function Home() {
  const [cocktail, setCocktail] = useState();
  const { data, isLoading } = useQuery(['Articles'], () => getCocktails());
  console.log(data);
  return (
    <>
      <Head>
        <title>홈 페이지</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>
      <Layout>
        <div className={styles.Contents}>
          <section>
            <FeaturedSlideList></FeaturedSlideList>
          </section>
          <section className={styles.Section}>
            <div className={styles.CocktailHeader}>
              <h2 className={styles.Title}>인기 칵테일</h2>
              <Button color="White" size="base">
                더보기
              </Button>
            </div>
            <div>
              <ul className={styles.Cocktail}>
                {data &&
                  data.map((cocktail) => (
                    <li key={cocktail.article_number}>
                      <ImagedListItem
                        subject={cocktail.article}
                        likeQuantity={cocktail.like}
                        imgWrapper="Row"
                        listWrapper="Row"
                      ></ImagedListItem>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          <section className={styles.Section}>
            <div className={styles.ProductInfo}>
              <div className={styles.ProductHeader}>
                <h2 className={styles.Title}>추천 제품</h2>
                <Button color="White" size="base">
                  더보기
                </Button>
              </div>
              <p className={styles.InfoText}>
                유저정보를 바탕으로 선정된 추천 제품입니다.
              </p>
            </div>
            <div>
              <ul className={styles.Product}>
                <li>
                  <ImagedListItem
                    contentsStyle="Col"
                    wrapperStyle="Col"
                    imgWrapper="Col"
                    listWrapper="Col"
                  ></ImagedListItem>
                </li>
                <li>
                  <ImagedListItem
                    contentsStyle="Col"
                    wrapperStyle="Col"
                    imgWrapper="Col"
                    listWrapper="Col"
                  ></ImagedListItem>
                </li>
                <li>
                  <ImagedListItem
                    contentsStyle="Col"
                    wrapperStyle="Col"
                    imgWrapper="Col"
                    listWrapper="Col"
                  ></ImagedListItem>
                </li>
                <li>
                  <ImagedListItem
                    contentsStyle="Col"
                    wrapperStyle="Col"
                    imgWrapper="Col"
                    listWrapper="Col"
                  ></ImagedListItem>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
