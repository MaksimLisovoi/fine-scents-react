import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { addZero } from 'services/addZeroFunc';

import galleryDesktopImg1 from '../../assets/images/imgs/desktop/gallery-desktop-1.jpg';
import galleryMobImg1 from '../../assets/images/gallery-img.jpg';

import galleryDesktopImg2 from '../../assets/images/imgs/desktop/gallery-desktop-2.jpg';
import galleryDesktopImg3 from '../../assets/images/imgs/desktop/gallery-desktop-3.jpg';

export const GallerySlider = () => {
  return (
    <Swiper
      className="gallery-swiper-slider"
      modules={[Navigation, Pagination, Scrollbar]}
      //   speed={1800}
      navigation={{
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      }}
      scrollbar={{
        el: '.gallery-scrollbar',
        draggable: true,
        // dragsize: 30,
      }}
      pagination={{
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
      }}
      breakpoints={{
        320: {
          spaceBetween: 30,
          speed: 800,
        },
        768: {
          spaceBetween: 30,
        },
        950: {
          spaceBetween: 400,
          speed: 1600,
        },
        1800: {
          spaceBetween: 600,
        },
      }}
    >
      <SwiperSlide>
        <div className="section-gallery__picture-block">
          <picture className="section-gallery__picture-desktop margin-right-200">
            <source srcSet={galleryDesktopImg2} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <picture className="section-gallery__picture-desktop">
            <source srcSet={galleryDesktopImg3} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
        </div>
        <div className="section-gallery__main-img">
          <picture>
            <source srcSet={galleryDesktopImg1} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <div className="section-gallery__description-block">
            <p>The Old English Garden in London'</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="section-gallery__picture-block">
          <picture className="section-gallery__picture-desktop margin-right-200">
            <source srcSet={galleryDesktopImg2} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <picture className="section-gallery__picture-desktop">
            <source srcSet={galleryDesktopImg3} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
        </div>
        <div className="section-gallery__main-img">
          <picture>
            <source srcSet={galleryDesktopImg1} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <div className="section-gallery__description-block">
            <p>The Old English Garden in London'</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="section-gallery__picture-block">
          <picture className="section-gallery__picture-desktop margin-right-200">
            <source srcSet={galleryDesktopImg2} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <picture className="section-gallery__picture-desktop">
            <source srcSet={galleryDesktopImg3} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
        </div>
        <div className="section-gallery__main-img">
          <picture>
            <source srcSet={galleryDesktopImg1} media="(min-width:800px)" />
            <img
              className="section-gallery__gallery--image"
              src={galleryMobImg1}
              alt=""
            />
          </picture>
          <div className="section-gallery__description-block">
            <p>The Old English Garden in London'</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
