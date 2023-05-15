import basketImg from '../../../assets/images/imgs/desktop-menu/basket-img.jpg';

export const CartItem = ({ cartProduct }) => {
  const { type, price, name } = cartProduct;

  console.log(type);
  return (
    <li className="basket-item">
      <div className="basket-item__block-position">
        <div className="basket-name-position">
          <img className="basket-item__img" src={basketImg} alt="" />
          <div>
            <div className="basket-item__name-block">
              <h3 className="basket-item__title">{type}</h3>
              <span className="basket-item__name">{name}</span>
            </div>
            <div className="basket-item__amount-block">
              <button className="basket-item__amount-btn">
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 0H0V2H14V0Z" fill="#E5DFD3" />
                </svg>
              </button>
              <span className="basket-item__amount">1</span>
              <button className="basket-item__amount-btn">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#E5DFD3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="basket-price__block-position">
          <span className="basket-item__price">{price}</span>
          <button className="basket-item__remove-btn">Remove</button>
        </div>
      </div>
    </li>
  );
};
