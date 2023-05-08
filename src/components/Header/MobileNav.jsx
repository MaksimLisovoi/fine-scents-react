import { NavLink } from 'react-router-dom';

export const MobileNav = ({ isOpenMobMenu, closeMobMenu }) => {
  return (
    <div
      className={`burger-navigation__container container ${
        isOpenMobMenu ? 'is-open' : ''
      }`}
    >
      <div className="burger-navigation__controls">
        <button
          className="burger-navigation__btn"
          type="button"
          aria-expanded="false"
          aria-controls="burger-navigation__container"
          onClick={closeMobMenu}
        >
          CLOSE
        </button>
        <p className="burger-navigation__btn">MENU</p>
      </div>
      <div className="burger-menu">
        {/* <!-- first block --> */}
        <div className="burger-menu__block">
          <h2 className="burger-menu__header">SHOP</h2>
          <ul className="burger-menu__list">
            <li>
              <NavLink to="/">Scents </NavLink>
            </li>
            <li>
              <NavLink to="/">Applying </NavLink>
            </li>
            <li>
              <NavLink to="/">All </NavLink>
            </li>
          </ul>
        </div>
        {/* <!-- second block --> */}
        <div className="burger-menu__block">
          <h2 className="burger-menu__header">ABOUT</h2>
          <ul className="burger-menu__list">
            <li>
              <NavLink to="/">
                <span className="burger-menu-span">Our</span> Charity Mission
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
