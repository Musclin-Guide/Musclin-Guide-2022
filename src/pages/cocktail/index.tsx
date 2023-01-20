import {
  ImagedListItem,
  ListPlacehoder,
  MenuButton,
  TextInput,
  UserReviewUnitItem,
} from '@components/index';
import { date } from '@utils/dateCalculate';
import { Layout } from '@components/Layout/Layout';
import Head from 'next/head';
import { ChangeEvent, SetStateAction, useState, useEffect } from 'react';
import { supabase } from '@lib/supabase/supabase';
import { HiOutlineHeart } from 'react-icons/hi';
import { ALinkMenuItem as ALink } from '@components/index';

export default function Cocktail({ subject, time, src }: ImagedListItem) {
  const [value, setValue] = useState<string>('');
  const [datas, setDatas] = useState<any[]>();
  console.log(value);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select('*');

    if (cocktail !== null) {
      setDatas(cocktail);
      console.log(cocktail[0].imgs[0].img1);
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
        <TextInput
          value={value}
          placeHolder="칵테일을 검색해보세요"
          setValue={setValue}
        />
        <button type="button" className="w-8 bg-slate-200">
          <ALink
            href={{
              pathname: '/cocktail/[result]',
              query: { result: `result_${value}` },
            }}
            isExternal={false}
          >
            테스트
          </ALink>
        </button>

        {/* {console.log(
          datas?.filter((item) => {
            item.subject.includes(value);
          })
        )} */}
        {datas &&
          datas.reverse().map((item) => {
            return (
              <ImagedListItem
                key={item.article_number}
                contentsStyle="Row"
                imgWrapper="Row"
                listWrapper="Row"
                subject={item.subject}
                time={date(Number(new Date(item.created_at)))}
                count={item.like}
                wrapperStyle="Row"
                src={item.imgs[0].img1}
              />
            );
          })}
        {/* {datas &&
          // datas
          //   .reverse()
          //   .map((item) => (
          //     <ImagedListItem
          //       key={item.article_number}
          //       contentsStyle="Row"
          //       imgWrapper="Row"
          //       listWrapper="Row"
          //       subject={item.subject}
          //       time={date(Number(new Date(item.created_at)))}
          //       count={item.like}
          //       wrapperStyle="Row"
          //       src={item.imgs[0].img1}
          //     />
          //   ))} */}
      </Layout>
    </>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../cocktail');
//   const posts = await res.json();
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }
