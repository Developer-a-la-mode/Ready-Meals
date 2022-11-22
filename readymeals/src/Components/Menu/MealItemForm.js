import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    return <form>
        <Input label="Amount" input={{id:'Amount', type:'number', min: '1', max: '8', step: '1', defaultValue: '1'}}/> 
        <button><i class="fa-solid fa-square-plus"></i></button>
    </form>
};

export default MealItemForm;