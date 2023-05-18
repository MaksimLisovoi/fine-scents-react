import { useDispatch } from 'react-redux';
import basketImg from '../../../assets/images/imgs/desktop-menu/basket-img.jpg';
import { addProduct, deleteProduct, minusProduct } from 'redux/cartSlice';

export const CartItem = ({ cartProduct, amount }) => {
  const { type, price, name, id, urlDesktop, url } = cartProduct;

  const dispatch = useDispatch();

  const deleteFromCart = id => {
    dispatch(deleteProduct(id));
  };

  const minusProductFromCart = id => {
    dispatch(minusProduct(id));
    if (!id) {
      deleteFromCart(id);
    }
  };

  const AddToCart = (name, type, price, id, urlDesktop, url) => {
    const product = {
      id,
      name,
      type,
      price,
      urlDesktop,
      url,
    };

    dispatch(addProduct(product));
  };

  console.log(type);
  return (
    <li className="basket-item">
      <div className="basket-item__block-position">
        <div className="basket-name-position">
          <div className="basket-item__img-block">
            <img className="basket-item__img" src={urlDesktop} alt="" />
          </div>
          <div>
            <div className="basket-item__name-block">
              <h3 className="basket-item__title">{type}</h3>
              <span className="basket-item__name">{name}</span>
            </div>
            <div className="basket-item__amount-block">
              <button
                onClick={() => minusProductFromCart(id)}
                className="basket-item__amount-btn"
              >
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 0H0V2H14V0Z" fill="#E5DFD3" />
                </svg>
              </button>
              <span className="basket-item__amount">{amount}</span>
              <button
                onClick={() =>
                  AddToCart(name, type, price, id, urlDesktop, url)
                }
                className="basket-item__amount-btn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#E5DFD3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="basket-price__block-position">
          <span className="basket-item__price">{amount * price}$</span>
          <button
            onClick={() => deleteFromCart(id)}
            className="basket-item__remove-btn"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
