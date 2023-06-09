import { getAddedToCart, getCartCount } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { CartBlock } from './CartBlock';
import { CartEmptyBlock } from './CartEmptyBlock';

export const Cart = ({
  isOpenBasketMenu,
  toggleBasketMenu,
  isHomePage,
  closeBasketMenu,
}) => {
  const addedProducts = useSelector(getAddedToCart);
  const { count, sum } = useSelector(getCartCount);

  const checkAmount = count > 0 && count;
  return (
    <div
      className={`navigation-desktop__item basket  ${
        isOpenBasketMenu && !isHomePage ? 'is-open' : ''
      }   ${isHomePage ? 'main-page' : 'not-main-page'}`}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header color-white">
          cart <span>{checkAmount}</span>
        </h2>
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
      {addedProducts.length > 0 ? (
        <CartBlock
          addedProducts={addedProducts}
          sum={sum}
          count={count}
          checkAmount={checkAmount}
        />
      ) : (
        <CartEmptyBlock
          closeBasketMenu={closeBasketMenu}
          toggleBasketMenu={toggleBasketMenu}
        />
      )}
    </div>
  );
};
