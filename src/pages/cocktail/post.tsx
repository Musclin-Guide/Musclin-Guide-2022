import {
  Button,
  CommentListItem,
  LikeToggleButton,
  ProfileCard,
  TextArea,
  Waiting,
} from '@components/index';
import { date } from '@utils/dateCalculate';
import { useSearchParams } from 'next/navigation';
import {
  ForwardedRef,
  forwardRef,
  Key,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/Login';
import Image from 'next/image';
import styles from '@components/FeaturedSlide/FeaturedSlideList.module.css';
import Tabbarstyles from '@components/TabBar/TabBar.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
import { supabase } from '@lib/supabase';
import 'swiper/css/bundle';
import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { useQuery } from 'react-query';
import clsx from 'clsx';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

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
  SwiperCore.use([Navigation, Pagination, Keyboard]);
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const { ref } = register('comment');
  const router = useRouter();
  const { data, isLoading } = useQuery(['Cocktails'], () => getArticle());
  /* ---------------------------------- 핸들러함수 --------------------------------- */

  /* ----------------------------------- 비동기 ---------------------------------- */

  async function getArticle() {
    const { data: cocktail, error } = await supabase
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
                <article key={`cocktailArticle_${cocktail.article_number}`}>
                  <h2 className=" text-neutral-700 text-xl mb-4 leading-9 font-semibold">
                    {cocktail.subject}
                  </h2>

                  <Swiper
                    key={`cocktail${Math.random()}}`}
                    spaceBetween={1}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    keyboard={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                  >
                    <>
                      <SwiperSlide
                        key={`cocktail${Math.random()}}`}
                        className={styles.swiperslide}
                      >
                        <div className="w-[20rem] h-[20rem] flex justify-center items-center">
                          <Image
                            src={'/assets/no_image.png'}
                            width={320}
                            height={320}
                            alt={'유저가 업로드한 이미지'}
                          />
                        </div>
                      </SwiperSlide>
                      <Image
                        src={'/assets/no_image.png'}
                        width={320}
                        height={320}
                        alt={'유저가 업로드한 이미지'}
                      />
                    </>
                    <>
                      <SwiperSlide className={styles.swiperslide}>
                        <div className="w-[20rem] h-[20rem] flex justify-center items-center">
                          <Image
                            src={'/assets/no_image.png'}
                            width={320}
                            height={320}
                            alt={'유저가 업로드한 이미지'}
                          />
                        </div>
                      </SwiperSlide>
                      <Image
                        src={'/assets/no_image.png'}
                        width={320}
                        height={320}
                        alt={'유저가 업로드한 이미지'}
                      />
                    </>
                  </Swiper>

                  <LikeToggleButton
                    className="mt-4"
                    onClick={() => {
                      setPlusLike(() => {
                        return !like ? 1 : 0;
                      });
                      setLike((prev) => !prev);

                      // if (!isLoggedIn) alert('로그인 후 이용이 가능합니다');
                    }}
                    toggle={like}
                    count={cocktail.like + plusLike}
                  />
                  <ProfileCard
                    userCareer={cocktail.profile.career}
                    userName={cocktail.profile.nickname}
                  />
                  <p className="mb-4">{cocktail.article}</p>
                </article>
                <section className="flex gap-1 justify-end">
                  {cocktail.user_id === session?.user.id ? (
                    <Button
                      onClick={async () => {
                        const confirmMessage =
                          confirm('정말로 삭제 하시겠습니까?');
                        if (confirmMessage === true) {
                          await supabase
                            .from('cocktail')
                            .delete()
                            .eq('cocktail_uuid', cocktail.cocktail_uuid);
                          router.back();
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
                            onSubmit={handleSubmit(async (e: FieldValues) => {
                              console.log(e.comment);
                              await supabase
                                .from('cocktail_comment')
                                .insert({
                                  related_article_number:
                                    data[0].article_number,
                                  body_comment: textArea.current?.value,
                                  user_id: session?.user.id,
                                })
                                .select();
                              reset();
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

                            <button
                              type="submit"
                              className={clsx(
                                'absolute right-2 top-7 text-sm',
                                'text-neutral-500'
                              )}
                              color="Outline"
                            >
                              등록
                            </button>
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
                        comment_number: Key | null | undefined;
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
                              className="absolute right-0 top-14"
                              size="xxs"
                              onClick={async () => {
                                await supabase
                                  .from('cocktail_comment')
                                  .delete()
                                  .eq('comment_number', comment.comment_number);
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
                  {data[0].cocktail_comment.length === 0 && (
                    <div role={'no_comment'} className={'mt-24 text-center'}>
                      <span className="text-neutral-400">
                        작성된 댓글이 없어요!
                      </span>
                    </div>
                  )}
                </section>
              </>
            ))}
        </>
      )}
    </SubHeaderLayout>
  );
}
