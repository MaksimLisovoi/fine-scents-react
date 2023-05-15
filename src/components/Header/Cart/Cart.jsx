import { getCartProducts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { CartList } from './CartList';
import { CartItem } from './CartItem';

export const Cart = ({ isOpenBasketMenu, toggleBasketMenu, isHomePage }) => {
  const cartProducts = useSelector(getCartProducts);

  // console.log(cartProducts);
  return (
    <div
      className={`navigation-desktop__item basket  ${
        isOpenBasketMenu ? 'is-open' : ''
      }   ${isHomePage ? 'main-page' : 'not-main-page'}`}
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
        <CartList>
          {cartProducts &&
            cartProducts.map(cartProduct => (
              <CartItem key={cartProduct.id} cartProduct={cartProduct} />
            ))}
        </CartList>
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
