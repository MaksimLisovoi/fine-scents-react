import { NavLink } from 'react-router-dom';

export const Shop = ({ isHomePage, isOpenShopMenu, toggleShopMenu }) => {
  return (
    <div
      className={`navigation-desktop__item shop ${
        isOpenShopMenu ? 'is-open' : ''
      } ${!isHomePage ? 'not-main-page' : ''} `}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header">shop</h2>
        <button
          onClick={toggleShopMenu}
          className="navigation-desktop__button"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item shop"
        >
          close
        </button>
      </div>
      <ul className="shop__list">
        <li>
          <div>
            <NavLink to="scents" className="shop-item scents">
              <h3 className="shop__list--header">Scents</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink to="applying" className="shop-item applying">
              <h3 className="shop__list--header">Applying</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink to="/all" className="shop-item all">
              <h3 className="shop__list--header">All</h3>
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
