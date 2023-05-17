import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartProducts, selectProducts } from 'redux/selectors';

import { BestsellerButtons } from './BestsellerButtons';
import { useProducts } from 'components/productsContext';
import { addProduct } from 'redux/cartSlice';
import { BestsellerCard } from './BestsellerCard';

export const BestsellerSlider = ({ buttonsClasses }) => {
  const cartProducts = useSelector(getCartProducts);
  const products = useSelector(selectProducts);

  // console.log(products);
  // const products = useProducts();

  const filtered = products && products.filter(product => product.isBestseller);

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
        className="bestseller-cards__block "
        modules={[Navigation]}
        direction="horizontal"
        speed={800}
        navigation={{
          nextEl: buttonsClasses.next,
          prevEl: buttonsClasses.prev,
        }}
        // loop={true}
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
        {filtered.map(({ type, price, name, id }) => {
          return (
            <SwiperSlide key={id}>
              <BestsellerCard
                id={id}
                type={type}
                price={price}
                name={name}
                AddToCart={AddToCart}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <BestsellerButtons filtered={filtered} />
    </>
  );
};
