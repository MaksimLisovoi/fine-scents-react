import { About } from './About';
import { Account } from './Account';
import { Basket } from './Basket';
import { Shop } from './Shop';

import Logo from '../../assets/images/logo-desktop.svg';
import { NavLink, useLocation } from 'react-router-dom';

export const DesktopNav = ({
  isOpenAccMenu,
  closeAccMenu,
  isOpenBasketMenu,
  closeBasketMenu,
  isHomePage,
}) => {
  console.log(isHomePage);

  return (
    <div className={`navigation-desktop${!isHomePage ? 'mission-page' : ''} `}>
      {/* <NavLink to="/" className="navigation-desktop__logo">
        <img src={Logo} alt="" width={150} />
      </NavLink> */}
      <nav className="navigation-desktop__nav">
        <NavLink to="/" className="logo">
          <img className="logo__icon" src={Logo} alt="" />
        </NavLink>
        {!isHomePage && (
          <ul className="navigation-desktop__list">
            <li>
              <button
                className="navigation-desktop__header"
                desktop-data-shop-button
                type="button"
                aria-expanded="false"
                aria-controls="navigation-desktop__item shop"
              >
                shop
              </button>
            </li>
            <li>
              <button
                className="navigation-desktop__header"
                desktop-data-about-button
                type="button"
                aria-expanded="false"
                aria-controls="navigation-desktop__item about"
              >
                about
              </button>
            </li>
            <li>
              <button
                desktop-data-account-button
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
                className="navigation-desktop__header"
                desktop-data-basket-button
                type="button"
                aria-expanded="false"
                aria-controls="navigation-desktop__item basket"
              >
                basket
              </button>
            </li>
          </ul>
        )}
      </nav>
      <nav className="navigation-desktop__block secondary">
        <Shop isHomePage={isHomePage} />
        <About isHomePage={isHomePage} />
        <Account
          isHomePage={isHomePage}
          isOpenAccMenu={isOpenAccMenu}
          closeAccMenu={closeAccMenu}
        />
        <Basket
          isHomePage={isHomePage}
          isOpenBasketMenu={isOpenBasketMenu}
          closeBasketMenu={closeBasketMenu}
        />
      </nav>
    </div>
  );
};
