import { Layout } from '@components/Layout/Layout';
import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { useCallback, useState } from 'react';
import { HiKey } from 'react-icons/hi';
import { ALinkMenuItem as ALink } from '@components/index';
import style from '@pages/Login.module.css';
import { supabase } from '@lib/supabase';
import { useForm, FieldValues } from 'react-hook-form';
import { useRouter } from 'next/router';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });

  const router = useRouter();

  const handleClick = async (Formdata: FieldValues) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Formdata.email,
      password: Formdata.password,
    });
    if (!error) {
      router.push('/');
    } else {
      alert('로그인 정보를 다시 확인해주세요');
    }
  };

  return (
    <Layout subject="로그인 페이지 입니다">
      <div className={style.Contents}>
        <h2 className={style.Header}>로그인</h2>
        <form onSubmit={handleSubmit(handleClick)} className={style.Form}>
          <TextInput
            labelName="email"
            type="email"
            placeHolder="이메일을 입력해 주세요"
            name={'email'}
            id={'email'}
            label={true}
            errors={errors}
            register={register}
            required={true}
            validationSchema={{
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '이메일 형식이 아닙니다',
              },
            }}
          ></TextInput>
          <TextInput
            labelName="password"
            type="password"
            placeHolder="비밀번호를 입력해 주세요"
            name={'password'}
            id={'password'}
            label={true}
            errors={errors}
            register={register}
            required={true}
            validationSchema={{
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value:
                  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                message:
                  '영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.',
              },
              minLength: {
                value: 8,
                message:
                  '영문+숫자+특수문자(! @ # $ % & * ?)를 포함한 8자 이상이어야합니다',
              },
              maxLength: {
                value: 15,
                message:
                  '영문+숫자+특수문자(! @ # $ % & * ?)를 포함한 15자리 이하여야합니다',
              },
            }}
          />
          <Button
            className={'w-full mt-4'}
            size="xl"
            icon={{ type: 'Leading', element: <HiKey></HiKey> }}
            type="submit"
          >
            로그인
          </Button>
        </form>
        <div className={style.Links}>
          <ALink className={style.Link} href="/findpassword" isExternal={false}>
            비밀번호 찾기
          </ALink>
          <ALink className={style.Link} href="/signup" isExternal={false}>
            회원 가입
          </ALink>
        </div>
      </div>
    </Layout>
  );
}
