/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, ImagedListItem, TextArea, TextInput } from '@components/index';
import { ImageInputList } from '@components/ImageInputList/ImageInputList';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from '@atoms/Login';
import { useRouter } from 'next/router';
import { useForm, FieldValues } from 'react-hook-form';
import { widgetToggle } from '@atoms/Widget';
import { supabase } from '@lib/supabase';
import { Session, User, UserResponse } from '@supabase/supabase-js';

export default function CreateCocktail() {
  const isLogin = useRecoilValue(loginState);
  const [getUserInfo, setUserInfo] = useState<Session>();
  const [Toggle, setToggle] = useRecoilState(widgetToggle);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });

  const useFormData = () => {
    let formdata;

    useEffect(() => {
      formdata = new FormData();
    }, []);

    return formdata;
  };
  const formdata = useFormData();

  useEffect(() => {
    if (isLogin === false) {
      router.push('/Login');
    }
    setToggle(true);

    console.log(getUserInfo);
  }, []);
  const onhandler = async (e: FieldValues) => {
    const { data: sseion } = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from('cocktail')
      .insert({
        user_id: sseion.session?.user.id,
        subject: e.subject,
        article: e.article,
        cocktail_img: e.image,
      })
      .select();
    console.log(e);
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
          register={register}
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
