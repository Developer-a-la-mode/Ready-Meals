import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={classes.About}>
        <div className={classes.About__container}>
          <h1>Let us Help You!</h1>
          <p className={classes.About__content}>
            Eating clean is hard. After a long day, most of us do not have time
            to choose a recipe, grocery shop, prep, cook, and clean. That's
            where we come in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
