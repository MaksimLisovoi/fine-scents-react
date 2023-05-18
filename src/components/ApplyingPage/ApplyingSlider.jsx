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
import { fetchProducts } from 'redux/operations';

export const ApplyingSlider = ({ categoryName, buttonsClasses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);

  const filtered =
    products && products.filter(product => categoryName === product.category);

  const AddToCart = (name, type, price, id, urlDesktop, url) => {
    const product = {
      id,
      name,
      type,
      price,
      urlDesktop,
      url,
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
        {filtered.map(product => (
          <SwiperSlide key={product.id}>
            <BestsellerCard product={product} AddToCart={AddToCart} />
          </SwiperSlide>
        ))}
      </Swiper>

      <BestsellerButtons filtered={filtered} />
    </>
  );
};
