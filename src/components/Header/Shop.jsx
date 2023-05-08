import { NavLink } from 'react-router-dom';

export const Shop = ({ isHomePage }) => {
  return (
    <div
      className={`navigation-desktop__item shop  ${
        !isHomePage ? 'not-main-page' : ''
      } `}
    >
      <h2 className="navigation-desktop__header">shop</h2>
      <ul className="shop__list">
        <li>
          <div>
            <NavLink to="/" className="shop-item scents">
              <h3 className="shop__list--header">Scents</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink to="/" className="shop-item applying">
              <h3 className="shop__list--header">Applying</h3>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <div className="shop-item all">
              <h3 className="shop__list--header">All</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
