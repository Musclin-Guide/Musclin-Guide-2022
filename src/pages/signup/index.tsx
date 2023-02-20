import { Button, TextInput } from '@components/index';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { supabase } from '@lib/supabase/supabase';
import type { ButtonProps } from '@components/Button/Button';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import textInputStyles from '@components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import router from 'next/router';
import { UserResponse } from '@supabase/supabase-js';
import styles from '@components/Button/Button.module.css';
import Head from 'next/head';

export default function Signup({ color = 'Outline' }: ButtonProps) {
  const [passwordConfirm, setPasswordConfirm] = useState<string>();
  const [emailConfirm, setEmailConfirm] = useState<string>('');
  const [emailList, setEmailList] = useState<{ email: any }[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });

  const onsubmitToServer = async (Formdata: FieldValues) => {
    const { data, error } = await supabase.auth.signUp({
      email: Formdata.email,
      password: Formdata.password,
      options: {
        data: {
          nickname: Formdata.nickname,
          birthday: Formdata.birthday,
        },
      },
    });

    if (error) {
      console.log(error.message, error.cause, error.name, error.stack);
    }
    const {
      data: { user },
    }: UserResponse = await supabase.auth.getUser();
    if (user) {
      console.log(user);
      await router.push({
        pathname: '/signup/[adduserinfo]',
        query: { adduserinfo: `${user.created_at}` },
      });
    }
  };

  const confirmEmail = async () => {
    const { data } = await supabase
      .from('user_email_list')
      .select('email')
      .textSearch('email', emailConfirm, {
        type: 'phrase',
        config: 'english',
      });

    if (data !== null && data.length === 1) {
      alert('이미 가입된 이메일입니다.');
      setEmailList(data);
    }
    if (data?.length === 0) {
      setEmailList(data);
    }
  };

  useEffect(() => {
    if (
      emailList?.length === 0 &&
      emailConfirm.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      document
        .querySelector('button[name="confirmbutton"]')
        ?.classList.add(styles.Disabled);
      document
        .querySelector('input[name="email"]')
        ?.setAttribute('disabled', 'true');
    }
  }, [emailList]);

  return (
    <>
      <Head>
        <title>Musclin Guide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>
      <NoFooterLayout subject={'회원가입페이지입니다'}>
        <form onSubmit={handleSubmit(onsubmitToServer)}>
          <h2 className="font-semibold text-2xl mb-8">회원 가입</h2>
          <fieldset className="flex flex-col gap-4">
            <legend className="sr-only">회원가입</legend>

            <fieldset className="relative">
              <legend className="sr-only">이메일 인증</legend>
              <TextInput
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmailConfirm(e.target.value);
                }}
                className={clsx(textInputStyles.InputSmall)}
                labelName="email"
                type={'email'}
                name={'email'}
                id={'email'}
                label={true}
                placeHolder="예:example@gmail.com"
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
              />
              <Button
                color={color}
                size="sm"
                name="confirmbutton"
                // eslint-disable-next-line react/no-children-prop
                children="중복확인"
                type="button"
                onClick={confirmEmail}
                className={'right-0 top-0 translate-y-[70%] absolute font-thin'}
              />
            </fieldset>
            <TextInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.currentTarget !== null) {
                  return setPasswordConfirm(e.currentTarget.value);
                }
              }}
              autoComplete="true"
              labelName="비밀번호"
              type={'password'}
              name={'password'}
              id={'password'}
              label={true}
              placeHolder="영문,숫자,특수문자를 포함한 8자 이상"
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
            <span className="text-sm text-neutral-400 -mt-3">
              특수문자 ! @ # $ % & * ?를 사용할 수 있습니다.
            </span>
            <TextInput
              autoComplete="true"
              labelName={'비밀번호 확인'}
              type={'password'}
              name={'passwordConfirm'}
              id={'passwordConfirm'}
              label={true}
              placeHolder="비밀번호를 한 번 더 입력해주세요."
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: '비밀번호를 한 번 더 입력해주세요',
                validate: {
                  notSame: (value: string) =>
                    value === passwordConfirm || '비밀번호가 같지 않습니다',
                },
              }}
            />
            <TextInput
              type={'text'}
              labelName={'닉네임'}
              name={'nickname'}
              id={'nickname'}
              label={true}
              placeHolder="닉네임을 입력해주세요"
              errors={errors}
              register={register}
              required={true}
              validationSchema={{
                required: '닉네임을 입력해주세요.',
                pattern: {
                  value: /^[A-za-z0-9가-힣]{2,10}$/,
                  message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
                },
                minLength: {
                  value: 2,
                  message: '닉네임이 너무 짧습니다',
                },
                maxLength: {
                  value: 10,
                  message: '닉네임은 10자 이하로 입력해주세요',
                },
              }}
            />
            <TextInput
              type={'date'}
              labelName={'생년월일'}
              name={'birthday'}
              id={'birthday'}
              label={true}
              errors={errors}
              register={register}
              required={true}
            />
          </fieldset>
          <Button type="submit" className="w-full mt-10 h-10 text-base">
            {/* <p className="text-base">회원가입 완료</p> */}
            회원가입 완료
          </Button>
        </form>
      </NoFooterLayout>
    </>
  );
}