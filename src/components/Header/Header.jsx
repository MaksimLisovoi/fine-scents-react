import { DesktopNav } from 'components/Header/DesktopNav';
import { MobileNav } from 'components/Header/MobileNav';
import { BurgerNav } from './BurgerNav';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
  const [isOpenAccMenu, setIsOpenAccMenu] = useState(false);
  const [isOpenBasketMenu, setIsOpenBasketMenu] = useState(false);
  const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
  const [isOpenAboutMenu, setIsOpenAboutMenu] = useState(false);

  const toggleMobMenu = () => {
    setIsOpenMobMenu(!isOpenMobMenu);
  };

  const toggleAccMenu = () => {
    setIsOpenAccMenu(!isOpenAccMenu);
  };

  const toggleBasketMenu = () => {
    setIsOpenBasketMenu(!isOpenBasketMenu);
  };
  const closeBasketMenu = () => {
    setIsOpenBasketMenu(false);
  };

  const toggleShopMenu = () => {
    setIsOpenShopMenu(!isOpenShopMenu);
  };

  const closeShopMenu = () => {
    setIsOpenShopMenu(false);
  };

  const toggleAboutMenu = () => {
    setIsOpenAboutMenu(!isOpenAboutMenu);
  };

  const closeAboutMenu = () => {
    setIsOpenAboutMenu(false);
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const headerBlockClass = classNames({ 'our-mission__header': !isHomePage });

  return (
    <header className="header header--visible header--transparent-bg">
      <div className="header__page">
        <div className={headerBlockClass}>
          <MobileNav
            isHomePage={isHomePage}
            isOpenMobMenu={isOpenMobMenu}
            closeMobMenu={toggleMobMenu}
          />
          <BurgerNav
            openMobMenu={toggleMobMenu}
            openAccMenu={toggleAccMenu}
            openBasketMenu={toggleBasketMenu}
          />
          <div className="header__controls">
            <button className="navigation__button play">
              <svg
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.5 20.1495C38.5 30.5878 29.9957 39.0539 19.5 39.0539C9.00427 39.0539 0.5 30.5878 0.5 20.1495C0.5 9.71122 9.00427 1.24512 19.5 1.24512C29.9957 1.24512 38.5 9.71122 38.5 20.1495Z"
                  stroke="white"
                />
                <line
                  x1="14.5"
                  y1="11.6912"
                  x2="14.5"
                  y2="28.6078"
                  stroke="white"
                />
                <line
                  x1="25.5"
                  y1="11.6912"
                  x2="25.5"
                  y2="28.6078"
                  stroke="white"
                />
              </svg>
            </button>
            <button className="navigation__button arrow">
              <svg
                width="8"
                height="46"
                viewBox="0 0 8 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 45.4958C3.84171 45.691 4.15829 45.691 4.35355 45.4958L7.53553 42.3138C7.7308 42.1185 7.7308 41.8019 7.53553 41.6067C7.34027 41.4114 7.02369 41.4114 6.82843 41.6067L4 44.4351L1.17157 41.6067C0.976311 41.4114 0.659728 41.4114 0.464466 41.6067C0.269204 41.8019 0.269204 42.1185 0.464466 42.3138L3.64645 45.4958ZM3.5 0.362793L3.5 45.1422H4.5L4.5 0.362793L3.5 0.362793Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <DesktopNav
            closeShopMenu={closeShopMenu}
            closeAboutMenu={closeAboutMenu}
            closeBasketMenu={closeBasketMenu}
            isHomePage={isHomePage}
            isOpenAccMenu={isOpenAccMenu}
            toggleAccMenu={toggleAccMenu}
            isOpenBasketMenu={isOpenBasketMenu}
            toggleBasketMenu={toggleBasketMenu}
            toggleShopMenu={toggleShopMenu}
            isOpenShopMenu={isOpenShopMenu}
            toggleAboutMenu={toggleAboutMenu}
            isOpenAboutMenu={isOpenAboutMenu}
          />
        </div>
      </div>
    </header>
  );
};
