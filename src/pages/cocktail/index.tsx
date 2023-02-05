import Head from 'next/head';
import { EditButton, ImagedListItem } from '@components/index';
import styles from '@components/TextInput/TextInput.module.css';
import { date } from '@utils/dateCalculate';
import { BsSearch } from 'react-icons/all';
import { Layout } from '@components/Layout/Layout';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { useRouter } from 'next/router';

export default function Cocktail() {
  const router = useRouter();
  const [datas, setDatas] = useState<any[]>();
  const inputRef = useRef<any>(null);

  useEffect(() => {
    getData();
    inputValue();
  }, []);

  const getData = async () => {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select('*')
      .order('created_at', { ascending: true });

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
    <>
      <Head>
        <title>Musclin Guide</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>

      <Layout className="s-center">
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
              if (inputRef.current.value) {
                router.push({
                  pathname: '/cocktail/[result]',
                  query: {
                    result: `${inputValue()}`,
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
                  href={'/'}
                  contentsStyle="Row"
                  imgWrapper="Row"
                  listWrapper="Row"
                  subject={item.subject}
                  time={date(Number(new Date(item.created_at)))}
                  count={item.like}
                  wrapperStyle="Row"
                  src={item.imgs[0] ? item.imgs[0].img1 : '/assets/noImage.png'}
                />
              );
            })}
      </Layout>
    </>
  );
}
