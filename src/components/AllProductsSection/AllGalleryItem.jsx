import Img1 from '../../assets/images/imgs/all-products-imgs/all-product1.jpg';
import ImgDesktop1 from '../../assets/images/imgs/all-products-imgs/all-product1-desktop.jpg';
import { addProduct } from 'redux/cartSlice';
import { useDispatch } from 'react-redux';

export const AllGalleryItem = ({ product }) => {
  const { id, type, price, name, urlDesktop, url } = product;

  const dispatch = useDispatch();

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
    <li key={id} className=" section-products__card">
      <div className="bestseller__picture-block">
        <picture>
          <source
            srcSet={`${urlDesktop} 300w`}
            media="(min-width: 800px)"
            sizes="300px"
          />
          <source media="(max-width: 600px)" srcSet={url} />
          <img
            className="bestseller__img"
            src={url}
            alt=""
            width={'300px'}
            height={'300px'}
          />
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
        onClick={() => AddToCart(name, type, price, id, urlDesktop, url)}
        className="button"
      >
        QUICK SHOP
      </button>
    </li>
  );
};
