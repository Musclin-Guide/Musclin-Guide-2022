import Image from 'next/image';
import styles from '@components/FeaturedSlide/FeaturedSlideList.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
import { supabase } from '@lib/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
// Import Swiper styles
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';

interface FeaturedSlideListProps {
  supabaseClient?: SupabaseClient;
  children?: React.ReactNode;
  [propsName: string]: any;
}
export const FeaturedSlideList = ({ ...props }: FeaturedSlideListProps) => {
  const [list, setlist] = useState<FeaturedSlideListProps[]>([]);
  useEffect(() => {
    fetchusers();
    const $ = document.querySelector('.swiper-slide');
    console.log($);
  }, []);

  async function fetchusers() {
    const { data } = await supabase.from('cocktail_img').select('*');
    if (data !== null) {
      setlist(data);
    }
  }

  fetchusers();
  SwiperCore.use([Navigation, Pagination, Keyboard]);
  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        keyboard={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        {list.map((i) => {
          return (
            <SwiperSlide
              key={`cocktail_${i.id}`}
              className={styles.swiperslide}
            >
              <Image
                src={`${i.img_path}`}
                width={320}
                height={320}
                alt={'유저가 업로드한 이미지'}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
