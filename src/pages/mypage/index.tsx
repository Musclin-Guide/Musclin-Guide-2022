import { CareerInput, MyPagSubBar, TextInput } from '@components/index';
import { supabase } from '@lib/supabase/index';
import styles from '@components/CareerInput/CareerInput.module.css';
import type { UserResponse, User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import clsx from 'clsx';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { CommentListItem } from '@components/CommentList/CommentListItem/CommentListItem';
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
    // handleSubmit,
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
    <SubHeaderLayout subject={'제품탐색페이지입니다'}>
      <TextInput name={'email'} value={getUserInfo.email} readOnly />
      {/* <TextInput
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
      <div className="flex justify-between items-center primaryFocusVisible mt-2">
        <h2 className="text-sm">운동 경력 *</h2>
        <CareerInput
          register={register}
          id="career"
          className={clsx(styles.inputCommon, styles.inputNormalSize)}
          formName="career"
          selectName="career"
          text="년"
        />
      </div> */}

      <div>{getUserInfo.user_metadata.career}</div>
      <div>{getUserInfo.user_metadata.nickname}</div>
      <MyPagSubBar
        firstContents={undefined}
        secondContents={undefined}
        thirdContents={
          <CommentListItem
            onClick={() => console.log('이동하기')}
            key={2}
            writer={'teset'}
            date={3}
            comment={'wow'}
          />
        }
        forthContents={undefined}
      ></MyPagSubBar>
    </SubHeaderLayout>
  );
}
