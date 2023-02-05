import { Button, CareerInput } from '@components/index';
import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import { TextInput } from '@components/TextInput';
import { supabase } from '@lib/supabase/supabase';
import { info } from 'console';
import { stringify } from 'querystring';
import {
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@components/CareerInput/CareerInput.module.css';
import clsx from 'clsx';

export default function Signup({ ...props }) {
  const [mail, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [career, setCareer] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [form, setFormdata] = useState({
    mail: mail,
    password: password,
  });
  console.log(mail);
  console.log(password);
  console.log(form);
  function validatorEmail(value: string) {
    const validRegex =
      // eslint-disable-next-line no-useless-escape
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (value.match(validRegex)) {
      return {
        result: true,
        text: '사용가능한 이메일 입니다.',
      };
    }
    return {
      result: false,
      text: '이메일을 다시 확인해주세요',
    };
  }

  function checkPassword(value: string) {
    if (value.trim() === password.trim()) {
      return {
        result: true,
        text: '비밀번호가 일치합니다.',
      };
    }
    return {
      result: false,
      text: '비밀번호를 다시 확인해주세요',
    };
  }
  function minimumLength(value: string) {
    if (value.length >= 2) {
      return {
        result: true,
        text: '',
      };
    }
    return {
      result: false,
      text: '닉네임이 너무 짧습니다',
    };
  }
  //
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.mail,
        password: password,
        options: {
          data: {
            nickname: nickname,
            birthday: birthDate,
          },
        },
      });
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <NoFooterLayout>
      <form action="">
        <h2 className="font-semibold text-2xl mb-8">회원 가입</h2>
        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">회원가입</legend>

          <TextInput
            label="email"
            value={mail.trim()}
            placeHolder="이메일을 입력해주세요."
            required={true}
            validator={validatorEmail}
            setValue={function (value: SetStateAction<string>): void {
              setEmail(value);
            }}
          />

          <TextInput
            type={'password'}
            label="비밀번호"
            required={true}
            value={password.trim()}
            setValue={function (value: SetStateAction<string>): void {
              setPassword(value);
            }}
          />
          <TextInput
            type={'password'}
            label="비밀번호 확인"
            required={true}
            value={passwordConfirm.trim()}
            setValue={function (value: SetStateAction<string>): void {
              setPasswordConfirm(value);
            }}
            validator={checkPassword}
          />
          <TextInput
            label="닉네임"
            required={true}
            value={nickname.trimEnd()}
            setValue={function (value: SetStateAction<string>): void {
              setNickname(value);
            }}
            validator={minimumLength}
          />
          <TextInput
            label="생년월일"
            type={'date'}
            required={true}
            value={birthDate}
            setValue={function (value: SetStateAction<string>): void {
              setBirthDate(value);
            }}
          />
          <div className="flex justify-between items-center primaryFocusVisible">
            <h2 className="text-sm">운동 경력</h2>
            <CareerInput
              id="운동경력"
              className={clsx(styles.inputCommon, styles.inputNormalSize)}
              formName="career"
              selectName="운동경력"
              text="년"
            />
          </div>
        </fieldset>

        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full h-12 mt-8"
        >
          <p className="text-base">본인 인증 후 가입하기</p>
        </Button>
      </form>
    </NoFooterLayout>
  );
}

//
//           <input
//             className="bg-yellow-200"
//             {...register('nickname', {
//               required: '이름을 입력해주세요',
//               minLength: {
//                 message: '5글자 이상 입력하세요',
//                 value: 5,
//               },
//             })}
//             type="text"
//             placeholder="Username"
//           />;
//           {
//             errors.nickname?.message;
//           }
