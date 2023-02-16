import Image from 'next/image';
import styles from '@components/FeaturedSlide/FeaturedSlideList.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
import { supabase } from '@lib/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';

interface FeaturedSlideListProps {
  children?: React.ReactNode;
  [propsName: string]: any;
}
export const FeaturedSlideList = ({ ...props }: FeaturedSlideListProps) => {
  SwiperCore.use([Navigation, Pagination, Keyboard]);
  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        <SwiperSlide
          key={`cocktail${Math.random()}}`}
          className={styles.swiperslide}
        >
          <Image
            src={'/assets/no_image.png'}
            width={320}
            height={320}
            alt={'유저가 업로드한 이미지'}
          />
        </SwiperSlide>
        <SwiperSlide
          key={`cocktail${Math.random()}}`}
          className={styles.swiperslide}
        >
          <Image
            src={'/assets/no_image.png'}
            width={320}
            height={320}
            alt={'유저가 업로드한 이미지'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
