/* eslint-disable react-hooks/rules-of-hooks */
import { supabase } from '@lib/supabase/supabase';
import { strict } from 'assert';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function test() {
  const router = useRouter();
  const [saveQuery, setsaveQuery] = useState('');
  const [fetch, setfetch] = useState<any[]>();
  const queries = router.query.result;

  async function filterData() {
    const { data: cocktail, error } = await supabase
      .from('cocktail')
      .select()
      .textSearch('subject', `${queries}`)
      .select('subject , article');

    console.log(cocktail);

    if (cocktail !== null) {
      // console.log(fetch);
      setfetch(cocktail);
    }
  }
  useEffect(() => {
    filterData();
    setsaveQuery(queries as string);
  }, [queries]);
  // const [subject, value] = router.query.params || [];
  // useEffect(() => {
  //   if (!router.isReady) return;
  // });

  return (
    <>
      {fetch?.map((i) => {
        return <p key={'tet'}>{i.subject}</p>;
      })}

      {/* {datas
        .filter((item) => {
          if (item.subject.includes(value)) return value;
        }) */}
      {/* .reverse()
        .map((item) => {
          return <div key={item.id + 1}>RESULT : {item.subject}</div>;
        })} */}
    </>
  );
}
