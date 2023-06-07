import Img from '../../../assets/images/imgs/desktop-menu/empty-cart.jpg';
import DesktopImg from '../../../assets/images/imgs/desktop-menu/empty-cart-desktop.jpg';
import { NavLink } from 'react-router-dom';

export const CartEmptyBlock = ({ closeBasketMenu }) => {
  return (
    <div className="basket-empty">
      <div className="basket-empty__text-block">
        <p className="basket-empty__text">
          Your basket is currently empty. Select the product, type in the
          quantity you want to order, and click on the Add to basket button.
        </p>
        <p className="basket-empty__text">Pleasant shopping!</p>
      </div>
      <NavLink
        onClick={closeBasketMenu}
        to="/products"
        className="basket-block__btn basket-empty__btn "
      >
        CONTINUE SHOPPING
      </NavLink>

      <picture>
        <source srcSet={DesktopImg} media="(min-width:800px)" />
        <source media="(max-width: 600px)" srcSet={Img} />
        <img className="basket-empty__img" src={Img} alt="" />
      </picture>
    </div>
  );
};
