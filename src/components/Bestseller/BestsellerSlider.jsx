import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartProducts } from 'redux/selectors';

import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import besellerImg from '../../assets/images/product1.png';
import { BestsellerButtons } from './BestsellerButtons';
import { useProducts } from 'components/productsContext';
import { addProduct } from 'redux/cartSlice';

export const BestsellerSlider = ({ buttonsClasses }) => {
  const cartProducts = useSelector(getCartProducts);
  const products = useProducts();

  const filtered = products && products.filter(product => product.isBestseller);

  const dispatch = useDispatch();

  const AddToCart = (name, type, price, id, quantity = 1) => {
    const product = {
      id,
      name,
      type,
      price,
      quantity,
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
        {filtered.map(
          ({
            id,
            type,
            price,
            name,
            url,
            urlDesktop,
            isBestseller,
            category,
          }) => {
            return (
              <SwiperSlide key={id} className="bestseller__card">
                <div className="bestseller__picture-block">
                  <picture>
                    <source
                      srcSet={besellerImgDesktop}
                      media="(min-width:800px)"
                    />
                    <source media="(max-width: 600px)" srcSet={besellerImg} />
                    <img className="bestseller__img" src={besellerImg} alt="" />
                  </picture>
                </div>
                <div className="bestseller__price-block">
                  <div>
                    <h3 className="bestseller__price-block--title">{type}</h3>
                    <span className="bestseller__price-block--name">
                      {name}
                    </span>
                  </div>
                  <span className="bestseller__price-block--title">
                    {price}
                  </span>
                </div>
                <button
                  className="button"
                  onClick={() => AddToCart(name, type, price, id)}
                >
                  QUICK SHOP
                </button>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <BestsellerButtons filtered={filtered} />
    </>
  );
};
