import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { useEffect, useState } from 'react';
import style from '@pages/Login.module.css';
import { supabase } from '@lib/supabase';
import { useForm, FieldValues } from 'react-hook-form';
import { AuthChangeEvent, User } from '@supabase/supabase-js';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
export default function FindPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });
  const [user, setUser] = useState<User | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string>();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        alert('What would you like your new password to be?');
        // const { data, error } = await supabase.auth.updateUser({
        //   password: newPassword,
        // });
        // console.log(event);
      }
    });
  }, []);

  const handleEmail = async (Formdata: FieldValues) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      Formdata.email
    );
  };

  return (
    <NoFooterLayout subject="로그인 페이지 입니다">
      <div className={style.Contents}>
        <h2 className={style.Header}>비밀번호 찾기</h2>
        <form onSubmit={handleSubmit(handleEmail)} className={style.Form}>
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
          />
          <Button type="submit" className="w-full mt-10 h-10">
            <p className="text-base">비밀번호 찾기</p>
          </Button>
        </form>
      </div>
    </NoFooterLayout>
  );
}