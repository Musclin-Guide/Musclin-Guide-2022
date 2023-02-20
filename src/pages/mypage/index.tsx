import { supabase } from '@lib/supabase/index';
import styles from '@components/CareerInput/CareerInput.module.css';
import type { UserResponse, User } from '@supabase/supabase-js';
import { Key, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import clsx from 'clsx';
import Image from 'next/image';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { CommentListItem } from '@components/CommentList/CommentListItem/CommentListItem';
import { ListPlacehoder } from '@components/ListPlaceholder/ListPlacehoder';
import { MyPagSubBar } from '@components/MypageSubBar/MypageSubBar';
import {
  useIsFetching,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { date } from '@utils/dateCalculate';
import { Button } from '@components/Button/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';
import { NoWidjectLayout } from '@components/Layout/NowidgetLayout';

interface MypageProps {
  type: string;
  disabled: boolean;
}

export default function Mypage({ type, disabled }: MypageProps) {
  const [getUserInfo, setUserInfo] = useState<User | null>(null);
  const [value, setValue] = useState({
    nickname: null,
  });
  const router = useRouter();
  const result = (router.query.id as string) || '';
  const { nickname } = value;
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onBlur' });
  const queryClient = useQueryClient();
  const deleteComment = useMutation(
    async (commentNumber: Key | null | undefined) => {
      await supabase
        .from('cocktail_comment')
        .delete()
        .eq('comment_number', commentNumber);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Cocktails');
      },
    }
  );
  async function getComment() {
    const getLoginUser: UserResponse = await supabase.auth.getUser();
    setUserInfo(getLoginUser.data.user);
    const { data: cocktail_comment, error } = await supabase
      .from('cocktail_comment')
      .select(
        `*, profile(
        *
        ),
        cocktail(
        cocktail_uuid, subject
        )`
      )
      .eq('user_id', getLoginUser.data.user?.id);

    if (error) console.log(error);
    return cocktail_comment;
  }
  const { data: cocktail_comments } = useQuery(
    ['Comment', getUserInfo?.user_metadata.nickname],
    getComment,
    {
      onSuccess: () => queryClient.invalidateQueries('Comment'),
    }
  ); //-> 이슈

  // if (!userData) {
  //   return <div>loading...</div>;
  // }

  // if (value) {
  //   [
  //     {
  //       nickname: `${getUserInfo?.user_metadata.nickname}`,
  //     },
  //   ];
  // }

  return (
    <NoWidjectLayout subject={'마이페이지입니다'}>
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
      <section
        className="flex gap-2 justify-between items-center mb-4 border border-neutral-100 rounded-md px-5 py-4"
        aria-label={`${getUserInfo?.user_metadata.nickname} 프로필 정보`}
      >
        <ul>
          <li>
            <h2>
              <b className="text-primary-default">
                {getUserInfo?.user_metadata.nickname}
              </b>
              님 안녕하세요!
            </h2>
          </li>
          <li>
            <span className="text-xs">{getUserInfo?.email}</span>
          </li>
        </ul>
        <button
          aria-label={`${getUserInfo?.user_metadata.nickname}님의 프로필 수정하기`}
          type="button"
          onClick={() => router.push('mypage/profileedit')}
        >
          <FiChevronRight size={20} color={'#a3a3a3'} />
        </button>
      </section>
      <Button className="w-full tracking-wide mb-2">로그아웃</Button>
      <MyPagSubBar
        firstContents={
          <ListPlacehoder key={111} contents="작성하신 리뷰가 없습니다" />
        }
        secondContents={
          <ListPlacehoder key={222} contents="작성하신 칵테일이 없습니다" />
        }
        thirdContents={
          cocktail_comments ? (
            cocktail_comments.map((comment) => {
              return (
                <section
                  className="relative"
                  key={`${comment.comment_number}_section`}
                >
                  <Link
                    href={{
                      pathname: `cocktail/post/${result}`,
                      query: {
                        id: comment.cocktail.cocktail_uuid,
                      },
                    }}
                  >
                    <CommentListItem
                      key={comment.comment_number}
                      onClick={() => console.log('이동하기')}
                      writer={`"${comment.cocktail.subject}" 게시글에서 작성하신 댓글입니다`}
                      date={date(Number(new Date(comment.created_at)))}
                      comment={comment.body_comment}
                    />
                  </Link>
                  <Button
                    key={`${comment.comment_number}_key`}
                    aria-label="delete"
                    className="absolute right-0 top-16"
                    size="xxs"
                    onClick={() => {
                      const confirmMessage = confirm(
                        '댓글을 정말 삭제 하시겠습니까? 삭제한 댓글은 복구할 수 없습니다'
                      );
                      const DeleteNumber = comment.comment_number;
                      confirmMessage && deleteComment.mutate(DeleteNumber);
                    }}
                  >
                    삭제
                  </Button>
                </section>
              );
            })
          ) : (
            <ListPlacehoder key={333} contents="작성하신 댓글이 없습니다" />
          )
        }
        forthContents={
          <ListPlacehoder key={555} contents="찜 목록이 없습니다" />
        }
      ></MyPagSubBar>
    </NoWidjectLayout>
  );
}
