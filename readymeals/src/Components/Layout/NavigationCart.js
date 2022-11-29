import React from "react";
import classes from "./NavigationCart.module.css";

const NavigationCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <i className={`fa-solid fa-cart-shopping ${props.Aclass}`}></i>
      <div className={classes.number}>5</div>
    </button>
  );
};

export default NavigationCart;