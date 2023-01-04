import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import photo from '@assets/activated_false,png';
import Image from 'next/image';
export const FeaturedSlideList = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>
        <Image src={''} alt={''} />
        <img src={photo} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
