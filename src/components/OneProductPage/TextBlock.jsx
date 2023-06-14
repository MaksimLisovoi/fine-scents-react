export const TextBlock = ({
  product,
  deleteFromCart,
  addToCart,
  minusProductFromCart,
  idFromParams,
}) => {
  product && (
    <div className="section-product__text-block">
      <div className="section-product__type">
        <h3 className="section-product__type-name">{product.type}</h3>
        <span className="section-product__price">{`$${product.price}`}</span>
      </div>
      <p className="section-product__title">{product.name}</p>
      <div className="basket-item__amount-block section-product__amount-block">
        <button
          onClick={() => minusProductFromCart(idFromParams)}
          className="basket-item__amount-btn"
        >
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0H0V2H14V0Z" fill="#000" />
          </svg>
        </button>
        {/* <span className="basket-item__amount">{amount}</span> */}
        <span className="basket-item__amount section-product__amount">1</span>
        <button
          onClick={() =>
            addToCart(
              product.name,
              product.type,
              product.price,
              product._id,
              product.urlDesktop,
              product.url
            )
          }
          className="basket-item__amount-btn"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#000" />
          </svg>
        </button>
      </div>
      <div className="section-product__descr-block">
        <p className="section-product__description">
          Embrace the evening with a soft, serene scent. Aromatic English
          lavender nestles among a cocooning note of white musk and
          night-blooming moonflowers.
        </p>
        <p className="section-product__values">
          Burn time approx 45 hours. Height 4.78cm, width 7.5cm
        </p>
      </div>
      <div className="section-product__options product-options">
        <div className="product-options__block">
          <span className="product-options__name">Aroma: </span>
          <span className="product-options__title">{product.name}</span>
        </div>
      </div>
      <button
        className="button section-product__btn"
        onClick={() =>
          addToCart(
            product.name,
            product.type,
            product.price,
            product._id,
            product.urlDesktop,
            product.url
          )
        }
      >
        add to cart
      </button>
    </div>
  );
};
