import { EditButton, ImagedListItem } from '@components/index';
import styles from '@components/TextInput/TextInput.module.css';
import { date } from '@utils/dateCalculate';
import { BsSearch } from 'react-icons/all';
import { Layout } from '@components/Layout/Layout';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { loginState } from '@atoms/Login';
import { useRecoilState } from 'recoil';
export { loginState } from '@atoms/Login';

function CocktailPage() {
  const router = useRouter();
  const [datas, setDatas] = useState<any[]>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const result = (router.query.id as string[]) || [];

  useEffect(() => {
    getData();
    inputValue();
  }, []);

  const { data, isLoading } = useQuery(['Articles'], () => getData(), {
    staleTime: 5000, // 5초
    cacheTime: Infinity, // 제한 없음
  });
  const getData = async () => {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select('*')
      .order('created_at', { ascending: true });
    console.log(cocktail);
    if (cocktail !== null) {
      console.log(cocktail);
      setDatas(cocktail);
    }
  };

  const inputValue = () => {
    if (inputRef.current !== null) {
      return inputRef.current.value;
    }
  };

  return (
    <div>
      <Layout className="s-center" subject={'칵테일페이지입니다'}>
        <div className="flex items-center gap-2">
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
                    id: `${inputValue()}`,
                  },
                });
              } else {
                alert('검색어가 너무 짧습니다. 2자이상 입력해주세요.');
              }
            }}
          >
            <BsSearch className="EditButton_icon__iGeUo" />
          </EditButton>
        </div>

        {datas &&
          datas
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <ImagedListItem
                  key={item.article_number}
                  href={{
                    pathname: `/cocktail/post/${result}`,
                    query: {
                      id: encodeURIComponent(item.cocktail_uuid),
                    },
                  }}
                  contentsStyle="Row"
                  imgWrapper="Row"
                  listWrapper="Row"
                  subject={item.subject}
                  time={date(Number(new Date(item.created_at)))}
                  count={item.like}
                  wrapperStyle="Row"
                  src={
                    item.cocktail_img[0]
                      ? item.cocktail_img[0].img
                      : '/assets/noImage.png'
                  }
                  alt={item.subject}
                />
              );
            })}
      </Layout>
    </div>
  );
}

export default CocktailPage;
