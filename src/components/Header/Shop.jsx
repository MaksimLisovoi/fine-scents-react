import { NavLink } from 'react-router-dom';

export const Shop = ({
  isHomePage,
  isOpenShopMenu,
  toggleShopMenu,
  closeShopMenu,
}) => {
  console.log(isHomePage);

  return (
    <div
      className={`navigation-desktop__item shop ${
        !isHomePage ? 'not-main-page' : 'main-page'
      } ${isOpenShopMenu && !isHomePage ? 'is-open' : ''}  `}
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
            <NavLink
              onClick={closeShopMenu}
              to="scents"
              className="shop-item scents"
            >
              <h3 className="shop__list--header">Scents</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              onClick={closeShopMenu}
              to="applying"
              className="shop-item applying"
            >
              <h3 className="shop__list--header">Applying</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              onClick={closeShopMenu}
              to="/all"
              className="shop-item all"
            >
              <h3 className="shop__list--header">All</h3>
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
