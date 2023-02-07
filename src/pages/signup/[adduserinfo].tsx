import { CareerInput } from '@components/CareerInput';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { supabase } from '@lib/supabase';
import clsx from 'clsx';
import { FileController } from '@components/ProfileUploader/ProfileUploader';
import { FieldValues, useForm } from 'react-hook-form';
import styles from '@components/CareerInput/CareerInput.module.css';
import { Button, EditButton } from '@components/index';
import router from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { User, UserResponse } from '@supabase/supabase-js';
import { HiOutlineCamera } from 'react-icons/hi';
import Head from 'next/head';

interface ProfileProps {
  size?: 'small' | 'medium' | 'large';
  name?: string;
}

const sizes = {
  small: 'w-24 h-24',
  medium: 'w-40 h-40',
  large: 'w-52 h-52',
};

export default function AddUserInfo({ size = 'small', name }: ProfileProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
  });

  const [getUserInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    async function isUserLogin() {
      const getLoginUser: UserResponse = await supabase.auth.getUser();
      const { error } = await supabase.auth.getUser();
      setUserInfo(getLoginUser.data.user);
      if (error?.name === 'AuthApiError') {
        router.push('/error');
      }
    }

    isUserLogin();
  }, []);

  const onsumit = async (Formdata: FieldValues) => {
    const { error } = await supabase
      .from('profile')
      .update({ career: Formdata.career_num })
      .eq('email', getUserInfo?.email);
    await supabase.storage
      .from('avatars')
      .upload(
        `/avatars/user_customs/${getUserInfo?.email}.jpg`,
        Formdata.avatar_url
      );
    await router.push({
      pathname: '/signup/welcome',
    });
    console.log(getUserInfo?.email);

    if (error) {
      console.log(error.message, error.details, error.code);
    }
  };

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
      <NoFooterLayout subject={'추가정보 입력 페이지입니다'}>
        <form onSubmit={handleSubmit(onsumit)}>
          <h2 className="font-semibold text-2xl mb-8">추가 정보</h2>
          <fieldset className="flex flex-col justify-center items-center gap-20 mt-10">
            <legend className="sr-only">추가 정보 입력</legend>
            <div className={clsx('relative', sizes[size])}>
              <FileController
                name="avatar_url"
                control={control}
                defaultValue={'/assets/_adeeffilloprtu.png'}
                render={({ field, base64, remove, select }: FieldValues) => (
                  <>
                    {base64 ? (
                      <Fragment>
                        <div className=" object-contain flex flex-col gap-2 items-center">
                          <Image
                            priority
                            onClick={select}
                            className={clsx(
                              'rounded-full object-contain self-center',
                              sizes[size]
                            )}
                            src={base64}
                            alt={''}
                            width={100}
                            height={100}
                          />
                          <Button
                            color="Outline"
                            className="p-1"
                            size="xxs"
                            onClick={remove}
                          >
                            <p>삭제</p>
                          </Button>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="object-contain flex flex-col gap-2 items-center">
                          <input {...field} />
                          <Image
                            priority
                            onClick={select}
                            className={clsx(
                              'rounded-full object-contain self-center',
                              sizes[size]
                            )}
                            src={'/assets/default_profile.png'}
                            alt={''}
                            width={100}
                            height={100}
                          />
                          <EditButton
                            className="bg-orange-400 w-6 h-6 border border-neutral-100 bottom-0 right-1 rounded-full absolute"
                            icon={
                              <HiOutlineCamera className="stroke-neutral-100 ml-[0.2rem]" />
                            }
                            onClick={select}
                            title="나가기"
                            type="button"
                          />
                        </div>
                      </Fragment>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex gap-14 items-center text-sm">
              <h3>운동 경력이 어떻게 되시나요? *</h3>
              <CareerInput
                register={register}
                selectName="career_num"
                className={clsx(
                  styles.inputCommon,
                  styles.inputWideSize,
                  'primaryFocusVisible'
                )}
              />
            </div>
            <Button type="submit" className="w-full h-10 mt-20">
              <p className="text-base">추가 정보 업데이트</p>
            </Button>
          </fieldset>
        </form>
      </NoFooterLayout>
    </>
  );
}
