import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';

import { useEffect } from 'react';

// import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
// import besellerImg from '../../assets/images/product1.png';
import { BestsellerButtons } from '../Bestseller/BestsellerButtons';

import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { addProduct } from 'redux/cartSlice';
import { BestsellerCard } from 'components/Bestseller/BestsellerCard';
import { fetchProducts } from 'redux/products/operations';
import { useCart } from 'hooks/useCart';

export const ApplyingSlider = ({ categoryName, buttonsClasses }) => {
  const dispatch = useDispatch();
  const { addToCart } = useCart();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);

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
        {filtered.map(product => (
          <SwiperSlide key={product._id}>
            <BestsellerCard product={product} addToCart={addToCart} />
          </SwiperSlide>
        ))}
      </Swiper>

      <BestsellerButtons filtered={filtered} />
    </>
  );
};
