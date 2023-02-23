import { NoWidjectLayout } from '@components/Layout/NoWidgetLayout';
import Tabbarstyles from '@components/TabBar/TabBar.module.css';
import { useEffect } from 'react';
export default function ProfileEdit() {
  useEffect(() => {
    const ActiveCocktailTabBar = document.querySelectorAll(
      '.TabBar_default__Dx5I1'
    );
    // textArea.current && textArea.current.focus();
    ActiveCocktailTabBar[3].classList.add(Tabbarstyles.active);
  }, []);
  return (
    <NoWidjectLayout subject={'회원정보 수정페이지'}>
      <div>test</div>
      {/* <TextInput disabled name={'email'} value={getUserInfo.email} readOnly /> */}
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
    </NoWidjectLayout>
  );
}
