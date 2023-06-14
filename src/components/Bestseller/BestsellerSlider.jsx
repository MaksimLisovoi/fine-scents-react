import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';

import { BestsellerButtons } from './BestsellerButtons';
import { BestsellerCard } from './BestsellerCard';
import { fetchBestsellers } from 'redux/products/operations';
import { useEffect } from 'react';
import { useCart } from 'hooks/useCart';

export const BestsellerSlider = ({ buttonsClasses }) => {
  const dispatch = useDispatch();

  const { addToCart } = useCart();

  useEffect(() => {
    dispatch(fetchBestsellers());
  }, [dispatch]);

  const products = useSelector(selectProducts);

  // const AddToCart = (name, type, price, id, urlDesktop, url) => {
  //   const product = {
  //     id,
  //     name,
  //     type,
  //     price,
  //     urlDesktop,
  //     url,
  //   };

  //   dispatch(addProduct(product));
  // };

  return (
    <>
      <Swiper
        className="bestseller-cards__block "
        modules={[Navigation]}
        direction="horizontal"
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
        {products &&
          products.map(product => {
            return (
              <SwiperSlide key={product._id}>
                <BestsellerCard product={product} addToCart={addToCart} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <BestsellerButtons filtered={products} />
    </>
  );
};
