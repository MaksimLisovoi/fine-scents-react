import Img1 from '../../assets/images/imgs/all-products-imgs/all-product1.jpg';
import ImgDesktop1 from '../../assets/images/imgs/all-products-imgs/all-product1-desktop.jpg';

import Img2 from '../../assets/images/imgs/all-products-imgs/all-product2.jpg';
import ImgDesktop2 from '../../assets/images/imgs/all-products-imgs/all-product2-desktop.jpg';

import Img3 from '../../assets/images/imgs/all-products-imgs/all-product3.jpg';
import ImgDesktop3 from '../../assets/images/imgs/all-products-imgs/all-product3-desktop.jpg';

export const Gallery = () => {
  return (
    <ul className="bestseller-cards__block section-products__cards-list">
      <li className="bestseller__card">
        <div className="bestseller__picture-block">
          <picture>
            <source srcSet={ImgDesktop1} media="(min-width:800px)" />
            <img className="bestseller__img" src={Img1} alt="" />
          </picture>
        </div>
        <div className="bestseller__price-block">
          <div>
            <h3 className="bestseller__price-block--title">Room Spray</h3>
            <span className="bestseller__price-block--name">
              Mayfair Affair
            </span>
          </div>
          <span className="bestseller__price-block--title">$120</span>
        </div>

        <button className="button">QUICK SHOP</button>
      </li>
      <li className="bestseller__card">
        <div className="bestseller__picture-block">
          <picture>
            <source srcSet={ImgDesktop2} media="(min-width:800px)" />
            <img className="bestseller__img" src={Img2} alt="" />
          </picture>
        </div>
        <div className="bestseller__price-block">
          <div>
            <h3 className="bestseller__price-block--title">Scented Candle</h3>
            <span className="bestseller__price-block--name">
              Hyde in the Park
            </span>
          </div>
          <span className="bestseller__price-block--title">$120</span>
        </div>

        <button className="button">QUICK SHOP</button>
      </li>
      <li className="bestseller__card">
        <div className="bestseller__picture-block">
          <picture>
            <source srcSet={ImgDesktop3} media="(min-width:800px)" />
            <img className="bestseller__img" src={Img3} alt="" />
          </picture>
        </div>
        <div className="bestseller__price-block">
          <div>
            <h3 className="bestseller__price-block--title">Compact diffuser</h3>
            <span className="bestseller__price-block--name">
              Turnagain Lane
            </span>
          </div>
          <span className="bestseller__price-block--title">$120</span>
        </div>

        <button className="button">QUICK SHOP</button>
      </li>
    </ul>
  );
};
