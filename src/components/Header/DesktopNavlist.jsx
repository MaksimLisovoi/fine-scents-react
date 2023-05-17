export const DesktopNavlist = ({
  toggleAccMenu,
  toggleBasketMenu,
  toggleShopMenu,
  toggleAboutMenu,
}) => {
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
          basket
        </button>
      </li>
    </ul>
  );
};
