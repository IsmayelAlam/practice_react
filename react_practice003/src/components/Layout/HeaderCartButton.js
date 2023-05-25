import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Carts/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberCartItem = cartCtx.items.reduce(
    (curNum, item) => curNum + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnAnimation && classes.bump}`;

  const { items } = cartCtx;
  useEffect(() => {
    if (!items.length) {
      return;
    }
    setBtnAnimation(true);

    const animationTimeout = setTimeout(() => setBtnAnimation(false), 300);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      {props.children}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberCartItem}</span>
    </button>
  );
}
