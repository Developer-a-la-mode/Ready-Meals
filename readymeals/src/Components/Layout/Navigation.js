import classes from "./Navigation.module.css";
import NavigationCart from "./NavigationCart";

const Navigation = (props) => {
  return (
    <header className={classes.nav}>
      <div className={classes.nav__logo}>
        <i class="fa-solid fa-bowl-food"></i>
      </div>
      <nav>
        <ul className={classes.nav__links}>
          <li className={classes.nav__link}>
            <a href="#">Meal Plans</a>
          </li>
          <li className={classes.nav__link}>
            <a href="#">Meal Options</a>
          </li>
          <li className={classes.nav__link}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={classes.nav__usericon}>
        <a href="#"><i className={`fa-regular fa-user ${classes.nav__icon}`}></i></a>
        <NavigationCart Aclass={classes.nav__icon} onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Navigation;
