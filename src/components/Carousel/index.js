import React from 'react';

// import Swiper core and required components
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Image from '../../../static/Rectangle_13.jpg';
import { Figure } from './styles';

// install Swiper components
SwiperCore.use([Navigation, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
      <SwiperSlide>
        <Figure>
          <img src={Image} alt="room" />
        </Figure>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
