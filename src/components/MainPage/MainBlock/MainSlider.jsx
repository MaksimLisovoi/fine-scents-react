// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

import heroImg from '../../../assets/images/imgs/header-hero-desktop.jpg';
import heroImgMobile from '../../../assets/images/imgs/hero-header.jpg';
import { addZero } from 'services/addZeroFunc';

export const MainSlider = () => {
  return (
    // <div className="main-block__img">
    //   <picture>
    //     <source media="(min-width: 1200px)" srcSet={heroImg} />
    //     <source media="(min-width: 768px)" srcSet={heroImg} />
    //     <source media="(min-width: 480px)" srcSet={heroImgMobile} />
    //     <source media="(min-width: 320px)" srcSet={heroImgMobile} />
    //     <img src={heroImg} alt="" />
    //   </picture>
    // </div>
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      id="main-block__slider"
      speed={1200}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      // spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
      pagination={{
        el: '.main-swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
      }}
      scrollbar={{
        el: '.main-scrollbar',
        draggable: true,
        // dragsize: 30,
      }}
    >
      <SwiperSlide>
        <div className="main-block__img">
          <picture>
            <source media="(min-width: 1200px)" srcSet={heroImg} />
            <source media="(min-width: 768px)" srcSet={heroImg} />
            <source media="(min-width: 480px)" srcSet={heroImgMobile} />
            <source media="(min-width: 320px)" srcSet={heroImgMobile} />
            <img src={heroImg} alt="" />
          </picture>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="main-block__img">
          <picture>
            <source media="(min-width: 1200px)" srcSet={heroImg} />
            <source media="(min-width: 768px)" srcSet={heroImg} />
            <source media="(min-width: 480px)" srcSet={heroImgMobile} />
            <source media="(min-width: 320px)" srcSet={heroImgMobile} />
            <img src={heroImg} alt="" />
          </picture>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
