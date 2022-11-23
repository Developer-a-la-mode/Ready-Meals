import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const bgimage = props.imagex;
    return (
        <div className={classes.card} style={{ backgroundImage: `url(${bgimage})` }}>
            <div className={classes.card__content}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h2>{props.price}</h2>
                <MealItemForm />
            </div>
        </div>
    )
}

export default MealItem;
