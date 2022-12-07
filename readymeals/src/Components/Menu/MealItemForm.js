import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
    };

    return <form className={classes.mealItemForm} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{id:'Amount', type:'number', min: '1', max: '8', step: '1', defaultValue: '0'}}/> 
        <button className={classes.mealItemForm__button}>+ Add</button>
    </form>
};

export default MealItemForm;