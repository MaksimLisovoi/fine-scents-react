import { useDispatch } from 'react-redux';
import { deleteProduct, minusProduct, addProduct } from 'redux/cartSlice';

export const useCart = () => {
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

  const addToCart = (name, type, price, id, urlDesktop, url) => {
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

  return { deleteFromCart, minusProductFromCart, addToCart };
};
