import classes from "./Navigation.module.css";
import logo from "../../img/Logo.png";

const Navigation = () => {
  return (
    <header className={classes.nav}>
      <div className={classes.nav__logo}>
        <img src={logo} alt="logo" />
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

      <a href="#">
        <button>Log On</button>
      </a>
    </header>
  );
};

export default Navigation;
