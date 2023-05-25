import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Carts/CartIcon";

export default function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      {props.children}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
