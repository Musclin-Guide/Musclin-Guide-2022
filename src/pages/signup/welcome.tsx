import { Button } from '@components/index';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { Session } from '@supabase/supabase-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { supabase } from '@lib/supabase';
import { useRouter } from 'next/router';

export default function Welcome() {
  const router = useRouter();
  const [token, setToken] = useState<Session | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const userInfo = await supabase.auth.getSession();
      setToken(userInfo.data.session);
    };
    getToken();
    if (!token) {
      router.push('/error');
    }

    console.log(token);
  }, []);

  return (
    <>
      <NoFooterLayout subject="가입 환영페이지입니다">
        <h1 className="font-semibold  text-neutral-800 text-2xl mb-8">
          회원 가입 완료
        </h1>
        <section className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-xl font-medium leading-7  text-neutral-800">
            <span className="text-primary-default"> Welcome! </span>
            &nbsp;환영합니다
          </h2>
          <Image
            src={'/assets/welcome.jpg'}
            alt="로고 이미지"
            width={90}
            height={90}
          />
          <h2 className="mt-8 text-center  leading-7 text-base text-neutral-800">
            <span>맛있는 운동 정보를 한 눈에,</span>
            <br />
            <span>머슬랭에서 확인하세요!</span>
          </h2>
          <Button
            size="l"
            className="w-full"
            onClick={() => {
              router.push('/Login');
            }}
          >
            로그인 하러가기
          </Button>
        </section>
      </NoFooterLayout>
    </>
  );
}
