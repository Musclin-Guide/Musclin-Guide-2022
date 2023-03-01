import { ImagedListItem } from '@components/ImagedListItem';
import { Spinners } from '@components/Spinner/index';
import { supabase } from '@lib/supabase/supabase';
import { date } from '@utils/dateCalculate';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { LastContents } from '@components/LastContents/LastContents';

const NoAccessError = dynamic(() =>
  import('@components/Error/Error').then((module) => module.NoAccessError)
);

const fetch = async (pageParam: number, isLast?: boolean) => {
  const cocktail = await supabase
    .from('cocktail')
    .select('*')
    .order('article_number', { ascending: false })
    .range(pageParam, pageParam + 3);

  cocktail.data && cocktail.data?.length < pageParam
    ? (isLast = true)
    : (isLast = false);

  return {
    isLast,

    cocktail: cocktail,
    nextPage: pageParam + 4,
  };
};

export function CocktailList() {
  const router = useRouter();
  const result = (router.query.re as string) || '';
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isError, data } =
    useInfiniteQuery('cocktailArray', ({ pageParam = 0 }) => fetch(pageParam), {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    });

  if (isError) {
    <NoAccessError />;
  }

  return (
    <>
      {data?.pages &&
        data.pages.map((page, index) => {
          return (
            <ul key={`cocktailIndex-${index}`}>
              {page.cocktail.data &&
                page.cocktail.data.map((item) => {
                  console.log(index);
                  return (
                    <>
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
                    </>
                  );
                })}

              {isFetchingNextPage ? (
                <Spinners key={'spinner'} />
              ) : (
                <div ref={ref}></div>
              )}
            </ul>
          );
        })}
    </>
  );
}
