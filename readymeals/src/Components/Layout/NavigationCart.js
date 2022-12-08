import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import classes from "./NavigationCart.module.css";

const NavigationCart = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item
  }, 0);

  console.log(numberOfCartItems);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <i className={`fa-solid fa-cart-shopping ${props.Aclass}`}></i>
      <div className={classes.number}>{numberOfCartItems}</div>
    </button>
  );
};

export default NavigationCart;