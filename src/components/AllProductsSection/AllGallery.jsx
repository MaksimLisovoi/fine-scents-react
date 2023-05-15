import Img1 from '../../assets/images/imgs/all-products-imgs/all-product1.jpg';
import ImgDesktop1 from '../../assets/images/imgs/all-products-imgs/all-product1-desktop.jpg';

import Img2 from '../../assets/images/imgs/all-products-imgs/all-product2.jpg';
import ImgDesktop2 from '../../assets/images/imgs/all-products-imgs/all-product2-desktop.jpg';

import Img3 from '../../assets/images/imgs/all-products-imgs/all-product3.jpg';
import ImgDesktop3 from '../../assets/images/imgs/all-products-imgs/all-product3-desktop.jpg';
import { useProducts } from 'components/productsContext';

export const AllGallery = ({ filter, products }) => {
  console.log(products);
  return (
    <div className="section-products__body">
      <div>
        <ul className="section-products__cards-list">
          {products.map(({ id, type, price, name, category }) => {
            if (filter === 'all') {
              return (
                <li key={id} className=" section-products__card">
                  <div className="bestseller__picture-block">
                    <picture>
                      <source srcSet={ImgDesktop1} media="(min-width:800px)" />
                      <img
                        loading="lazy"
                        className="bestseller__img"
                        src={Img1}
                        alt=""
                      />
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
                </li>
              );
            }
            if (category.toLowerCase() === filter) {
              return (
                <li key={id} className=" section-products__card">
                  <div className="bestseller__picture-block">
                    <picture>
                      <source srcSet={ImgDesktop1} media="(min-width:800px)" />
                      <img className="bestseller__img" src={Img1} alt="" />
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
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
