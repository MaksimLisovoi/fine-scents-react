import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import { getAllProducts, getForLivingroom } from 'services/dbApi';

import { useEffect, useState } from 'react';

import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import besellerImg from '../../assets/images/product1.png';
import { BestsellerButtons } from '../Bestseller/BestsellerButtons';
import { useProducts } from 'components/productsContext';

export const ApplyingSlider = ({ categoryName, buttonsClasses }) => {
  // console.log(livingroomProducts);

  const products = useProducts();

  const filtered =
    products && products.filter(product => categoryName === product.category);

  return (
    <>
      <Swiper
        className="livingroom-cards__block"
        modules={[Navigation]}
        speed={800}
        navigation={{
          nextEl: buttonsClasses.next,
          prevEl: buttonsClasses.prev,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        {filtered.map(({ id, type, price, name }) => (
          <SwiperSlide key={id} className="bestseller__card">
            <div className="bestseller__picture-block">
              <picture>
                <source srcSet={besellerImgDesktop} media="(min-width:800px)" />
                <source media="(max-width: 600px)" srcSet={besellerImg} />
                <img className="bestseller__img" src={besellerImg} alt="" />
              </picture>
            </div>
            <div className="bestseller__price-block">
              <div>
                <h3 className="bestseller__price-block--title">{type}</h3>
                <span className="bestseller__price-block--name">{name}</span>
              </div>
              <span className="bestseller__price-block--title">{price}</span>
            </div>
            <button className="button">QUICK SHOP</button>
          </SwiperSlide>
        ))}
      </Swiper>

      <BestsellerButtons filtered={filtered} />
    </>
  );
};
