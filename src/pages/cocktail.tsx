import { ImagedListItem, TextInput } from '@components/index';
import { date } from '@utils/dateCalculate';
import { Layout } from '@components/Layout/Layout';
import Head from 'next/head';
import { ChangeEvent, SetStateAction, useState, useEffect } from 'react';
import { ImagedListItemProps } from '@components/index';

import { supabase } from '@lib/supabase/supabase';

export default function Cocktail({ subject, time, src }: ImagedListItemProps) {
  const [value, setValue] = useState<string>('');
  const [datas, setDatas] = useState<any[] | null>([]);
  //
  //   useEffect(() => {
  //     getData();
  //   }, []);

  // const getData = async () => {
  //   const { data: cocktail_img, error } = await supabase.from('cocktail_img')
  //     .select(`
  //     "img_path",
  //   cocktail(
  //    "*"
  //   )
  //     `);
  //   setDatas(cocktail_img);
  //   console.log(cocktail_img);
  // };

  // const searched = test.filter((item) => {
  //   item.subject.toLowerCase().includes(value);
  // });
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
        {/* <TextInput
          value={value}
          type="search"
          placeHolder="칵테일을 검색해보세요"
          setValue={setValue}
        /> */}
        {/* {datas &&
          datas
            .reverse()
            .map((item) => (
              <ImagedListItem
                key={item.cocktail.article_number}
                contentsStyle="Row"
                imgWrapper="Row"
                listWrapper="Row"
                subject={item.cocktail.subject}
                time={date(Number(new Date(item.cocktail.created_at)))}
                wishQuantity={24}
                wrapperStyle="Row"
                src={`${item.img_path}`}
              />
            ))} */}

        {/* <ImagedListItem src={src} imgWrapper={'Row'} listWrapper={'Row'} /> */}
      </Layout>
    </>
  );
}
