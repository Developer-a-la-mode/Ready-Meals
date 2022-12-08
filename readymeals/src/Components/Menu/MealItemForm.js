import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.mealItemForm} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{id:'Amount', type:'number', min: '1', max: '8', step: '1', defaultValue: '0'}}/> 
        <button type="submit" className={classes.mealItemForm__button}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
};

export default MealItemForm;