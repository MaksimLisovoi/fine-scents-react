import { useSelector } from 'react-redux';
import { getCartCount } from 'redux/selectors';

export const DesktopNavlist = ({
  toggleAccMenu,
  toggleBasketMenu,
  toggleShopMenu,
  toggleAboutMenu,
}) => {
  const { count } = useSelector(getCartCount);

  const checkAmount = count > 0 && count;
  return (
    <ul className="navigation-desktop__list">
      <li>
        <button
          onClick={toggleShopMenu}
          className="navigation-desktop__header"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item shop"
        >
          shop
        </button>
      </li>
      <li>
        <button
          onClick={toggleAboutMenu}
          className="navigation-desktop__header"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item about"
        >
          about
        </button>
      </li>
      <li>
        <button
          onClick={toggleAccMenu}
          className="navigation-desktop__header"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item account"
        >
          account
        </button>
      </li>
      <li>
        <button
          onClick={toggleBasketMenu}
          className="navigation-desktop__header"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item basket"
        >
          cart <span>{checkAmount}</span>
        </button>
      </li>
    </ul>
  );
};
