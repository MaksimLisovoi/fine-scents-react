// import besellerImgDesktop from '../../assets/images/imgs/desktop/bestseller-desktop-3.png';
// import besellerImg from '../../assets/images/product1.png';

export const BestsellerCard = ({ product, AddToCart }) => {
  const { id, type, price, name, urlDesktop, url } = product;
  return (
    <div className="bestseller__card">
      <div className="bestseller__picture-block">
        <picture>
          <source
            srcSet={`${urlDesktop} 300w`}
            media="(min-width: 800px)"
            sizes="300px"
          />
          <source media="(max-width: 600px)" srcSet={url} />
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
        onClick={() => AddToCart(name, type, price, id, urlDesktop, url)}
      >
        QUICK SHOP
      </button>
    </div>
  );
};
