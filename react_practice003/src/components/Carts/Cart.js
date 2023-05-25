import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartItem = (
    <ul className={classes.cart_items}>
      {" "}
      {[{ id: "m1", name: "Sushi", price: 22.99, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>$35.62</div>
      </div>
      <div className={classes.actions}>
        <button className={classes.button__alt} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={props.onCloseCart}>
          Order
        </button>
      </div>
    </Modal>
  );
}
