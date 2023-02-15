import { EditButton, ImagedListItem } from '@components/index';
import styles from '@components/TextInput/TextInput.module.css';
import { date } from '@utils/dateCalculate';
import { BsSearch, DiVim } from 'react-icons/all';
import { Layout } from '@components/Layout/Layout';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { loginState } from '@atoms/Login';
import { useRecoilState } from 'recoil';
export { loginState } from '@atoms/Login';

const getData = async () => {
  const { data: cocktail } = await supabase
    .from('cocktail')
    .select('*')
    .order('created_at', { ascending: true });

  return cocktail;
};

const inputValue = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  if (inputRef && inputRef.current !== null) {
    return inputRef.current.value;
  }
};

export default function CocktailPage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const result = (router.query.re as string) || '';

  const { data, isLoading } = useQuery(['Articles'], () => getData(), {
    staleTime: 5000, // 5초
    cacheTime: Infinity, // 제한 없음
  });

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
      <section key={'coktail_list'}>
        {data &&
          data
            .slice(0)
            .reverse()
            .map((item) => {
              // console.log(item);
              return (
                <ImagedListItem
                  key={item.article_number}
                  id={item.article_number}
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
            })}
      </section>
    </Layout>
  );
}
