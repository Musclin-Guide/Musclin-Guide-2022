/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function test() {
  const router = useRouter();
  console.log(router);
  const querys = router.query;
  const [subject, value] = router.query.params || [];
  useEffect(() => {
    if (!router.isReady) return;
    console.log(querys);
  });

  return (
    <>
      <p>{subject}</p>
      <p>{value}</p>
      {/* {datas
        .filter((item) => {
          if (item.subject.includes(value)) return value;
        })
        .reverse()
        .map((item) => {
          return <div key={item.id + 1}>RESULT : {item.subject}</div>;
        })}
    </> */}
    </>
  );
}
