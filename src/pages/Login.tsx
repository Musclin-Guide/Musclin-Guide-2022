import { Layout } from '@components/Layout/Layout';
import { Button } from '@components/Button';
import { TextInput } from '@components/TextInput';
import { useState } from 'react';
import { HiKey } from 'react-icons/hi';
import { ALinkMenuItem as ALink } from '@components/index';
import style from '@pages/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Layout>
      <h2 className={style.Header}>로그인</h2>
      <form>
        <TextInput
          label="email"
          type="email"
          placeHolder="이메일을 입력해 주세요"
          value={email}
          setValue={setEmail}
          required
        ></TextInput>
        <TextInput
          label="password"
          type="password"
          placeHolder="비밀번호를 입력해 주세요"
          value={password}
          setValue={setPassword}
          required
        ></TextInput>
      </form>
      <Button
        className={'w-full'}
        size="xl"
        icon={{ type: 'Leading', element: <HiKey></HiKey> }}
      >
        로그인
      </Button>
      <div>
        <ALink href="/password" isExternal={false}>
          비밀번호 찾기
        </ALink>
        <ALink href="/register" isExternal={false}>
          회원 가입
        </ALink>
      </div>
    </Layout>
  );
}
