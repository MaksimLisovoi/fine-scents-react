import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-1.png';
import besellerImg from '../../assets/images/product1.png';

export const BestsellerCard = ({ id, type, price, name, AddToCart }) => {
  return (
    <div className="bestseller__card">
      <div className="bestseller__picture-block">
        <picture>
          <source srcSet={besellerImgDesktop} media="(min-width:800px)" />
          <source media="(max-width: 600px)" srcSet={besellerImg} />
          <img className="bestseller__img" src={besellerImg} alt="" />
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
        onClick={() => AddToCart(name, type, price, id)}
      >
        QUICK SHOP
      </button>
    </div>
  );
};
