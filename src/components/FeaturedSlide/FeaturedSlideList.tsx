import Image from 'next/image';
import styles from '@components/FeaturedSlide/FeaturedSlideList.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css/bundle';

export const FeaturedSlideList = () => {
  const demoImgList = [
    {
      id: 1,
      src: '/assets/activated_true.png',
      alt: '유저가 업로드한 이미지',
    },
    {
      id: 2,
      src: '/assets/activated_true.png',
      alt: '유저가 업로드한 이미지',
    },
    {
      id: 3,
      src: '/assets/activated_true.png',
      alt: '유저가 업로드한 이미지',
    },
  ];
  SwiperCore.use([Navigation, Pagination, Keyboard]);
  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        // rewind={true}
        onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        keyboard={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        {demoImgList.map((i) => {
          return (
            <SwiperSlide key={`${i.id}`} className={styles.swiperslide}>
              <Image src={i.src} width={320} height={320} alt={i.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
