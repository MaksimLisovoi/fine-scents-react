import Img1 from '../../assets/images/imgs/all-products-imgs/all-product1.jpg';
import ImgDesktop1 from '../../assets/images/imgs/all-products-imgs/all-product1-desktop.jpg';

export const AllGalleryItem = ({ product }) => {
  const { id, type, price, name, category } = product;
  return (
    <li key={id} className=" section-products__card">
      <div className="bestseller__picture-block">
        <picture>
          <source srcSet={ImgDesktop1} media="(min-width:800px)" />
          <img loading="lazy" className="bestseller__img" src={Img1} alt="" />
        </picture>
      </div>
      <div className="bestseller__price-block">
        <div>
          <h3 className="bestseller__price-block--title">{type}</h3>
          <span className="bestseller__price-block--name">{name}</span>
        </div>
        <span className="bestseller__price-block--title">{price}</span>
      </div>

      <button className="button">QUICK SHOP</button>
    </li>
  );
};
