import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card} onclick={props.onclick}>
            <div className={classes.card__content}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h2>{props.price}</h2>
            </div>
        </div>
    )
}

export default Card;