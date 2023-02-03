import { CareerInput } from '@components/CareerInput';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { TextInput } from '@components/TextInput';
import { supabase } from '@lib/supabase';
import clsx from 'clsx';
import { FieldValues, useForm } from 'react-hook-form';
import styles from '@components/CareerInput/CareerInput.module.css';
import { Button } from '@components/index';
import router from 'next/router';
import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import { SetStateAction, useState } from 'react';
import { ProfileUpload } from '@components/ProfileUpload/ProfileUpload';

export default function AddUserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });

  return (
    <NoFooterLayout>
      <form>
        <h2 className="font-semibold text-2xl mb-8">회원 가입</h2>
        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">회원가입</legend>
          <ProfileUpload />
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
          </div>
        </fieldset>
        <Button type="submit" className="w-full h-10">
          <p className="text-base">프로필 업데이트</p>
        </Button>
      </form>
    </NoFooterLayout>
  );
}
