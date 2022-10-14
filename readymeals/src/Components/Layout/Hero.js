import React from 'react';
import classes from './Hero.module.css';
import Button from '../UI/Button';

const Hero = () => {
    return <section className={classes.hero}>
        <div className={classes.hero__container}>
            <h1>Healthy Meal Prep</h1>
            <Button>Find Your Plan</Button>
        </div>
    </section>
}

export default Hero;