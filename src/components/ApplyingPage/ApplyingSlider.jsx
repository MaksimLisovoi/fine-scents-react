import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import { getAllProducts, getForLivingroom } from 'services/dbApi';

import { useEffect, useState } from 'react';

import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import besellerImg from '../../assets/images/product1.png';
import { BestsellerButtons } from '../Bestseller/BestsellerButtons';
import { useProducts } from 'components/productsContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { addProduct } from 'redux/cartSlice';
import { BestsellerCard } from 'components/Bestseller/BestsellerCard';

export const ApplyingSlider = ({ categoryName, buttonsClasses }) => {
  // console.log(livingroomProducts);

  const products = useSelector(selectProducts);

  const filtered =
    products && products.filter(product => categoryName === product.category);

  const dispatch = useDispatch();

  const AddToCart = (name, type, price, id) => {
    const product = {
      id,
      name,
      type,
      price,
    };

    dispatch(addProduct(product));
  };

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
          <SwiperSlide key={id}>
            <BestsellerCard
              id={id}
              type={type}
              price={price}
              name={name}
              AddToCart={AddToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <BestsellerButtons filtered={filtered} />
    </>
  );
};
