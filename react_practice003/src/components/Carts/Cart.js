import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}

      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes.button__alt} onClick={props.onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button} onClick={props.onCloseCart}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
