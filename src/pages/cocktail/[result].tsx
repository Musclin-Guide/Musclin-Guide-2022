import Head from 'next/head';
import { ImagedListItem, ListPlacehoder } from '@components/index';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { supabase } from '@lib/supabase/supabase';
import { date } from '@utils/dateCalculate';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '@components/TabBar/TabBar.module.css';
import { LocalKey, LocalStorage } from 'ts-localstorage';

export default function CocktailResultPage() {
  const [fetchData, setfetchData] = useState<any[]>();
  const searchParams = useSearchParams();
  const searchQueryWord = searchParams.get('result');
  const key = new LocalKey('search_result', '');

  async function filterData() {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select('*')
      .order('created_at', { ascending: true })
      .or(`subject.like.%${searchQueryWord}%,article.like.%${searchQueryWord}%`)
      // .like('article', `%${searchQueryWord}%`) --> 한 통신에 두 번 사용할 수 없는 듯합니다.
      // .like('subject', `%${searchQueryWord}%`)
      // .textSearch('subject', `${queries}`); --> 태그전략에 좋을 것 같습니다. 검색 인덱스 최적화가 안됨
      .limit(50);

    if (cocktail !== null) {
      setfetchData(cocktail);
    }
  }

  useEffect(() => {
    filterData();
    LocalStorage.setItem(key, JSON.stringify(fetchData));

    const ActiveCocktailTabBar = document.querySelectorAll(
      '.TabBar_default__Dx5I1'
    );
    ActiveCocktailTabBar[1].classList.add(styles.active);
  }, [key]);
  return (
    <>
      <SubHeaderLayout className="s-center">
        <Head>
          <title>Musclin Guide</title>
          <link
            rel="icon"
            href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
            sizes="16x16"
          />
        </Head>
        <section>
          <h2 className="text-neutral-500">
            <strong className="text-lg text-primary-default">{`"${searchQueryWord}"`}</strong>
            {' 검색결과'}
          </h2>

          {fetchData?.length ? (
            fetchData
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <>
                    <div key={`reult_${item}`} className="sr-only">
                      {item.article}
                    </div>
                    <ImagedListItem
                      key={item + `${searchQueryWord}`}
                      href={'/'}
                      contentsStyle="Row"
                      imgWrapper="Row"
                      listWrapper="Row"
                      subject={item.subject}
                      time={date(Number(new Date(item.created_at)))}
                      count={item.like}
                      wrapperStyle="Row"
                      src={
                        item.imgs[0] ? item.imgs[0].img1 : '/assets/noImage.png'
                      }
                    />
                  </>
                );
              })
          ) : (
            <ListPlacehoder key={`result_noResult`} />
          )}
        </section>
      </SubHeaderLayout>
    </>
  );
}
