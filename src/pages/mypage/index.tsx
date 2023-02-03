import { TextInput } from '@components/index';
import { supabase } from '@lib/supabase/index';

import type { UserResponse, User } from '@supabase/supabase-js';

import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

interface MypageProps {
  type: string;
  disabled: boolean;
}
export default function Mypage({ type, disabled }: MypageProps) {
  const [getUserInfo, setUserInfo] = useState<User | null>(null);
  const [value, setValue] = useState({
    nickname: null,
  });

  const { nickname } = value;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });
  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };
  useEffect(() => {
    async function getLoginUerData() {
      const getLoginUser: UserResponse = await supabase.auth.getUser();
      setUserInfo(getLoginUser.data.user);
    }

    console.log(getUserInfo);
    getLoginUerData();
  }, []);

  if (!getUserInfo) {
    return <div>loading...</div>;
  }

  if (value) {
    [
      {
        nickname: `${getUserInfo?.user_metadata.nickname}`,
      },
    ];
  }

  return (
    <>
      <TextInput name={'email'} value={getUserInfo.email} readOnly />
      <TextInput
        disabled={disabled}
        name={'birthday'}
        type={disabled ? 'text' : 'date'}
        // value={getUserInfo.user_metadata.birthday.replace(/-/g, ' ')}
      />
      <TextInput
        disabled={disabled}
        name={'nickname'}
        type={'text'}
        // value={value.nickname}
        // onChange={onChangeHandler}
        register={register}
      />

      <div>{getUserInfo.user_metadata.career}</div>
      <div>{getUserInfo.user_metadata.nickname}</div>
    </>
  );
}
