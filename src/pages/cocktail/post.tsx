import { Button } from '@components/Button/index';
import { CommentListItem } from '@components/CommentList/CommentListItem/CommentListItem';
import { FeaturedSlideList } from '@components/FeaturedSlide/index';
import { LikeToggleButton } from '@components/LikeToggleButton/index';
import { ProfileCard } from '@components/ProfileCard/index';
import { TextArea } from '@components/TextArea/index';
import { Waiting } from '@components/Waiting/index';
import { useSearchParams } from 'next/navigation';
import { Key, useEffect, useRef, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/Login';
import Tabbarstyles from '@components/TabBar/TabBar.module.css';
import { supabase } from '@lib/supabase';
import 'swiper/css/bundle';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import Nocomment from '@components/Nocomment/Nocomment';
import { date } from '@utils/dateCalculate';
import CommentButton from '@components/CommentButton/CommentButton';

export default function Post() {
  /* ---------------------------------- 상태 관리 ---------------------------------- */

  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);
  const [like, setLike] = useState<boolean>(false);
  const [plusLike, setPlusLike] = useState<number>(0);
  const [session, setSession] = useState<Session | null>(null);
  /* ------------------------------ 생성한 객체들 ------------------------------ */

  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const searchParams = useSearchParams();
  const searchQueryWord = searchParams.get('id');
  const decodeSearchQueryWord = `${searchQueryWord}`;
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const { ref } = register('comment');
  const router = useRouter();
  const queryClient = useQueryClient();

  /* ---------------------------------- 핸들러함수 --------------------------------- */

  const postComment = useMutation(
    async (insertdata: {
      related_article_number: any;
      body_comment: string | undefined;
      user_id: string | undefined;
    }) => {
      await supabase.from('cocktail_comment').insert(insertdata).select();
      reset();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Cocktails');
      },
    }
  );

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
  /* ----------------------------------- 비동기 ---------------------------------- */

  async function getArticle() {
    const { data: cocktail } = await supabase
      .from('cocktail')
      .select(
        `*,
        profile(
        nickname,career
        )
        ,
        cocktail_comment(
          *, profile(
            nickname
          )
        )
      `
      )

      .eq('cocktail_uuid', decodeSearchQueryWord);

    return cocktail;
  }
  const { data, isLoading } = useQuery(
    ['Cocktails', decodeSearchQueryWord],
    () => getArticle()
  );
  console.log(data && data[0].article.split('/n'));
  useEffect(() => {
    const ActiveCocktailTabBar = document.querySelectorAll(
      '.TabBar_default__Dx5I1'
    );
    // textArea.current && textArea.current.focus();
    ActiveCocktailTabBar[1].classList.add(Tabbarstyles.active);
    async function getUser() {
      const { data: ssesion } = await supabase.auth.getSession();
      setSession(ssesion.session);
    }
    getUser();
  }, []);

  return (
    <SubHeaderLayout subject={'칵테일 게시물 상세 페이지입니다.'}>
      {isLoading ? (
        <Waiting />
      ) : (
        <>
          {data &&
            data.map((cocktail) => (
              <>
                <h2 className=" text-neutral-700 text-xl mb-4 leading-9 font-semibold">
                  {cocktail.subject}
                </h2>
                <FeaturedSlideList></FeaturedSlideList>
                <LikeToggleButton
                  className="mt-4"
                  onClick={() => {
                    setPlusLike(() => {
                      return !like ? 1 : 0;
                    });

                    setLike((prev) => !prev);

                    if (!isLoggedIn) alert('로그인 후 이용이 가능합니다');
                  }}
                  toggle={like}
                  count={cocktail.like + plusLike}
                />
                <ProfileCard
                  userCareer={cocktail.profile.career}
                  userName={cocktail.profile.nickname}
                />
                {cocktail.article.split('\n').map((i: string[]) => {
                  console.log(i);
                  return <p key={'p'}>{i}</p>;
                })}

                <section className="flex gap-1 justify-end">
                  {cocktail.user_id === session?.user.id ? (
                    <Button
                      onClick={async () => {
                        const confirmMessage =
                          confirm('정말 삭제 하시겠습니까?');
                        if (confirmMessage === true) {
                          await supabase
                            .from('cocktail')
                            .delete()
                            .eq('cocktail_uuid', cocktail.cocktail_uuid);
                          router.push('/cocktail');
                        }
                      }}
                      color="White"
                      size="xxs"
                    >
                      삭제
                    </Button>
                  ) : (
                    ''
                  )}
                </section>
                <section>
                  <h3 className="text-xl">
                    <b className="text-primary-default">
                      {data[0].cocktail_comment.length}개
                    </b>
                    의 댓글
                  </h3>
                  <div
                    className="flex items-center flex-nowrap gap-1"
                    role={'commentbox'}
                  >
                    {isLoggedIn ? (
                      <>
                        <>
                          <form
                            id="writeComment"
                            onSubmit={handleSubmit(() => {
                              const insertData = {
                                related_article_number:
                                  data && data[0].article_number,
                                body_comment: textArea.current?.value,
                                user_id: session?.user.id,
                              };
                              postComment.mutate(insertData);
                            })}
                            className="relative"
                          >
                            <TextArea
                              register={register}
                              ref={(e) => {
                                ref(e), (textArea.current = e);
                              }}
                              onKeyup={() => {
                                if (
                                  textArea.current &&
                                  textArea.current !== null
                                ) {
                                  textArea.current.style.height = 'auto';
                                  textArea.current.style.height =
                                    textArea.current.scrollHeight + 'px';
                                }
                              }}
                              placeholder="상대방을 배려하는 댓글을 써주세요"
                              name={'comment'}
                              rows={1}
                              minLength={1}
                            />
                            <CommentButton />
                          </form>
                        </>
                      </>
                    ) : (
                      <TextArea
                        ref={textArea}
                        className="border-0 h-auto"
                        labelname=""
                        readOnly={true}
                        placeholder="로그인 후 댓글입력이 가능합니다"
                        name={'comment'}
                        rows={1}
                      />
                    )}
                  </div>
                  {data &&
                    data[0].cocktail_comment.map(
                      (comment: {
                        comment_number: Key | null;
                        user_id: string | undefined;
                        profile: { nickname: string };
                        created_at: string | number | Date;
                        body_comment: string;
                      }) => (
                        <section
                          key={`${comment.comment_number}댓글목록`}
                          className={'relative'}
                        >
                          {comment.user_id === session?.user.id && (
                            <Button
                              aria-label="delete"
                              className="absolute right-0 top-14"
                              size="xxs"
                              onClick={() => {
                                const confirmMessage = confirm(
                                  '댓글을 정말 삭제 하시겠습니까? 삭제한 댓글은 복구할 수 없습니다'
                                );
                                const DeleteNumber = comment.comment_number;
                                confirmMessage &&
                                  deleteComment.mutate(DeleteNumber);
                              }}
                            >
                              삭제
                            </Button>
                          )}
                          <CommentListItem
                            key={comment.comment_number}
                            writer={comment.profile.nickname}
                            date={date(Number(new Date(comment.created_at)))}
                            comment={comment.body_comment}
                          />
                        </section>
                      )
                    )}
                  {data[0].cocktail_comment.length === 0 && <Nocomment />}
                </section>
              </>
            ))}
        </>
      )}
    </SubHeaderLayout>
  );
}
