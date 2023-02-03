import { supabase } from '@lib/supabase/supabase';
import { FormEvent, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
export default function Page() {
  const [datas, setDatas] = useState({
    email: '',
    password: '',
    athletic_experience: '',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function handleSubmits(e: FormEvent) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: datas.email,
        password: datas.password,
        options: {
          data: {
            athletic_experience: datas.athletic_experience,
          },
        },
      });
      if (error) {
        <div className="bg-red-500 w-96 h-96">이메일이 중복되었습니다.</div>;

        alert('존재하는 이메일');
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(datas);
  function onchange(event: { target: { name: string; value: string } }) {
    setDatas((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <form onSubmit={handleSubmits}>
      <input
        onChange={onchange}
        placeholder="입력하세요"
        name="email"
        type="text"
      />
      <input
        onChange={onchange}
        placeholder="입력하세요"
        name="password"
        type="text"
      />
      <input
        onChange={onchange}
        placeholder="입력하세요"
        name="athletic_experience"
        type="text"
      />
      <button type="submit">전송</button>
    </form>
  );
}
