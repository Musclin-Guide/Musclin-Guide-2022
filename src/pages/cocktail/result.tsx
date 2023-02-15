import { ImagedListItem, ListPlacehoder } from '@components/index';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { supabase } from '@lib/supabase/supabase';
import { date } from '@utils/dateCalculate';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '@components/TabBar/TabBar.module.css';
import { useRouter } from 'next/router';
import { LocalKey, LocalStorage } from 'ts-localstorage';

export default function CocktailResultPage() {
  const searchParams = useSearchParams();
  const searchQueryWord = searchParams.get('re');
  const [fetchData, setfetchData] = useState<any[]>();
  const router = useRouter();
  const key = new LocalKey('search_result', '');
  const result = (router.query.id as string) || '';
  async function filterData() {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select('*')
      .order('created_at', { ascending: true })
      .or(`subject.like.%${searchQueryWord}%,article.like.%${searchQueryWord}%`)
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
  }, [filterData]);
  return (
    <div>
      <SubHeaderLayout
        className="s-center"
        subject={`${searchQueryWord}(으로/로) 검색한 결과입니다`}
      >
        <section key={`result_page`}>
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
                    <ImagedListItem
                      key={`item_${searchQueryWord}`}
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
                      alt={`${item.subject}에 대한 상세 게시물내용`}
                      id={item}
                    />
                  </>
                );
              })
          ) : (
            <ListPlacehoder key={`result_noResult`} />
          )}
        </section>
      </SubHeaderLayout>
    </div>
  );
}
