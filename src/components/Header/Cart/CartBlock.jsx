import { CartList } from './CartList';
import { CartItem } from './CartItem';

export const CartBlock = ({ addedProducts, sum, count }) => {
  return (
    <div className="basket-block">
      <CartList>
        {addedProducts &&
          addedProducts.map(({ addedItem, addedItemAmount }) => (
            <CartItem
              key={addedItem.id}
              cartProduct={addedItem}
              amount={addedItemAmount}
            />
          ))}
      </CartList>
      <div className="flex-space-between-position basket-block__dilivery-block">
        <div className="basket-block__dilivery">
          <label className="basket-block__dilivery--option" htmlFor="delivery">
            Delivery:
          </label>
          <select
            className="basket-block__dilivery--option select"
            id="delivery"
            name="delivery"
          >
            <option value="m">2 ~ 5 day</option>
            <option value="l">Large</option>
          </select>
        </div>
        <div className="basket-block__dilivery-price">
          <span className="basket-block__dilivery--option">$ 5,50</span>
        </div>
      </div>
      <div className="basket-block__total flex-space-between-position">
        <h3 className="basket-block__total-header">Total</h3>
        <span className="basket-block__total-sum">{sum}$</span>
      </div>

      <button className="basket-block__btn">checkout</button>
    </div>
  );
};
