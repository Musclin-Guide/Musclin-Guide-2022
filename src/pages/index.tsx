import Head from 'next/head';
import { FeaturedSlideList } from '@components/FeaturedSlide';
import { Button } from '@components/Button';
import { ImagedListItem } from '@components/ImagedListItem';
import { Header } from '@components/Header';
import { TabBar } from '@components/TabBar';
import styles from '@pages/homepage.module.css';

export default function Home() {
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
      <div className={styles.FixedContents}>
        <Header></Header>
        <TabBar></TabBar>
      </div>
      <main className={styles.Main}>
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
                <li>
                  <ImagedListItem
                    imgWrapper="Row"
                    listWrapper="Row"
                  ></ImagedListItem>
                </li>
                <li>
                  <ImagedListItem
                    imgWrapper="Row"
                    listWrapper="Row"
                  ></ImagedListItem>
                </li>
                <li>
                  <ImagedListItem
                    imgWrapper="Row"
                    listWrapper="Row"
                  ></ImagedListItem>
                </li>
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
      </main>
    </>
  );
}
