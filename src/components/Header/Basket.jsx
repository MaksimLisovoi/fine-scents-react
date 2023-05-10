import basketImg from '../../assets/images/imgs/desktop-menu/basket-img.jpg';

export const Basket = ({ isOpenBasketMenu, toggleBasketMenu, isHomePage }) => {
  return (
    <div
      className={`navigation-desktop__item basket ${
        isOpenBasketMenu ? 'is-open' : ''
      }   ${!isHomePage ? 'not-main-page' : 'main-page'}`}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header color-white">basket</h2>
        <button
          className="navigation-desktop__button color-white"
          onClick={toggleBasketMenu}
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item account"
        >
          close
        </button>
      </div>
      <div className="basket-block">
        <div className="basket-item">
          <div className="basket-item__block-position">
            <div className="basket-name-position">
              <img className="basket-item__img" src={basketImg} alt="" />
              <div>
                <div className="basket-item__name-block">
                  <h3 className="basket-item__title">Room Spray</h3>
                  <span className="basket-item__name">Mayfair Affair</span>
                </div>
                <div className="basket-item__amount-block">
                  <button className="basket-item__amount-btn">
                    {/* <svg width="14" height="14">
                                  <use href="./images/svg-sprite.svg#icon-basket-amount-btn-minus"></use>
                                </svg> */}
                  </button>
                  <span className="basket-item__amount">1</span>
                  <button className="basket-item__amount-btn">
                    {/* <svg width="14" height="14">
                                  <use href="./images/svg-sprite.svg#icon-basket-amount-btn-plus"></use>
                                </svg> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="basket-price__block-position">
              <span className="basket-item__price">$120</span>
              <button className="basket-item__remove-btn">Remove</button>
            </div>
          </div>
        </div>

        <div className="flex-space-between-position">
          <div className="basket-block__dilivery">
            <label
              className="basket-block__dilivery--option"
              htmlFor="delivery"
            >
              Delivery:
            </label>
            <select
              className="basket-block__dilivery--option select"
              id="delivery"
              name="delivery"
            >
              <option value="xs">Extra Small</option>
              <option value="s">Small</option>
              <option value="m">2 ~ 5 day</option>
              <option value="l">Large</option>
            </select>
          </div>
          <div className="basket-block__dilivery-price">
            <span className="basket-block__dilivery--option">$ 5,50</span>
          </div>
        </div>
        <div className="basket-block__total flex-space-between-position">
          <h3 className="basket-block__total-header">Total</h3>
          <span className="basket-block__total-sum">$ 485,50</span>
        </div>

        <button className="basket-block__btn">checkout</button>
      </div>
    </div>
  );
};
