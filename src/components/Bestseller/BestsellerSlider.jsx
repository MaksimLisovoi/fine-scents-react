import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { getAllProducts, getBestsellers } from 'services/dbApi';

import { useEffect, useState } from 'react';

import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import besellerImg from '../../assets/images/product1.png';
import { BestsellerButtons } from './BestsellerButtons';

export const BestsellerSlider = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    getBestsellers().then(setBestsellers);
  }, []);

  console.log(bestsellers);

  return (
    <div>
      <Swiper
        className="bestseller-cards__block"
        modules={[Navigation]}
        speed={800}
        navigation={{
          nextEl: '.bestseller-next',
          prevEl: '.bestseller-prev',
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
        {bestsellers &&
          bestsellers.map(
            ({
              id,
              type,
              price,
              name,
              url,
              urlDesktop,
              isBestseller,
              category,
            }) => (
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
                <button className="button">QUICK SHOP</button>
              </SwiperSlide>
            )
          )}
      </Swiper>
      {bestsellers.lnegth > 3 && <BestsellerButtons />}
    </div>
  );
};
