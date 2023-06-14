import { NavLink } from 'react-router-dom';

import img from '../../assets/images/product1.png';
import imgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import imgDesktop2 from '../../assets/images/imgs/desktop/bestseller-desktop-3.png';

console.log(imgDesktop);

export const BestsellerCard = ({ product, addToCart }) => {
  const { _id: id, type, price, name, urlDesktop, url } = product;

  console.log(urlDesktop);
  return (
    <NavLink to={`/products/${id}`}>
      <div className="bestseller__card">
        <div className="bestseller__picture-block">
          <picture>
            <source media="(min-width: 800px)" srcSet={urlDesktop} />
            <img className="bestseller__img" src={url} alt="" />
          </picture>
        </div>
        <div className="bestseller__price-block">
          <div>
            <h3 className="bestseller__price-block--title">{type}</h3>
            <span className="bestseller__price-block--name">{name}</span>
          </div>
          <span className="bestseller__price-block--title">{price}$</span>
        </div>
        <button
          className="button"
          onClick={() => addToCart(name, type, price, id, urlDesktop, url)}
        >
          QUICK SHOP
        </button>
      </div>
    </NavLink>
  );
};
