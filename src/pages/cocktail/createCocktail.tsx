/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */

import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from '@atoms/Login';
import { useRouter } from 'next/router';
import { useForm, FieldValues } from 'react-hook-form';
import { widgetToggle } from '@atoms/Widget';
import { supabase } from '@lib/supabase';
import dynamic from 'next/dynamic';

const TextArea = dynamic(() =>
  import('@components/TextArea/index').then((module) => module.TextArea)
);
const TextInput = dynamic(() =>
  import('@components/TextInput/index').then((module) => module.TextInput)
);
const ImageInputList = dynamic(() =>
  import('@components/ImageInputList/ImageInputList').then(
    (module) => module.ImageInputList
  )
);
const Button = dynamic(() =>
  import('@components/Button/index').then((module) => module.Button)
);
export default function CreateCocktail() {
  const isLogin = useRecoilValue(loginState);
  const [Toggle, setToggle] = useRecoilState(widgetToggle);
  const router = useRouter();
  const result = (router.query.re as string) || '';
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });
  const { ref } = register('article');

  const useFormData = () => {
    let formdata;

    useEffect(() => {
      formdata = new FormData();
    }, []);

    return formdata;
  };
  const formdata = useFormData();

  useEffect(() => {
    console.log(isLogin);
    if (isLogin === false) {
      router.push('/Login');
    }
    setToggle(true);
  }, []);

  const onhandler = async (e: FieldValues) => {
    console.log(e);
    const { data: session } = await supabase.auth.getSession();
    console.log(session);
    await supabase
      .from('cocktail')
      .insert({
        user_id: session.session?.user.id,
        subject: e.subject,
        article: e.article,
      })
      .select();

    const getSubjectValue = getValues('subject');
    const getArtcleValue = getValues('article');
    console.log(getSubjectValue);
    const { data: cocktail_data } = await supabase
      .from('cocktail')
      .select('*')
      .eq('subject', getSubjectValue)
      .eq('article', getArtcleValue)
      .eq('user_id', session.session?.user.id);

    if (cocktail_data !== null) {
      router.replace({
        pathname: `/cocktail/post/${result}`,
        query: {
          id: cocktail_data[0].cocktail_uuid,
        },
      });
    }
  };
  return (
    <NoFooterLayout subject={'칵테일 게시물 작성 페이지입니다.'}>
      <div className=" text-neutral-700 text-2xl mb-4 leading-9 font-semibold">
        새 칵테일 제조하기
      </div>
      <form onSubmit={handleSubmit(onhandler)}>
        <TextInput
          register={register}
          placeHolder="제목은 필수입니다"
          labelName="제목"
          name={'subject'}
        />
        <TextArea
          labelname="내용"
          register={register}
          ref={(e) => ref(e)}
          rows={10}
          readOnly={false}
          name={'article'}
          htmlFor={'article'}
        />
        <cite className="text-sm not-italic">
          &#8727; 사진은
          <strong className="text-primary-default">
            &nbsp;총 6장까지&nbsp;
          </strong>
          업로드 가능합니다
          <br /> &#8727; 사진은 한 장당
          <strong className="text-primary-default">&nbsp;5MB</strong>를 넘을 수
          없습니다
        </cite>

        <ImageInputList
          register={register}
          name={'image'}
          remit={6}
          formData={formdata}
        />
        <Button size="l" className="w-full mt-8" type="submit">
          작성 완료
        </Button>
      </form>
    </NoFooterLayout>
  );
}
