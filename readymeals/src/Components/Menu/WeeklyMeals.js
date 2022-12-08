import React from 'react';
import classes from './WeeklyMeals.module.css';
import MealItem from './MealItem';
import meal1 from '../../img/meal-1.jpg';
import meal2 from '../../img/meal-2.jpg';
import meal3 from '../../img/meal-3.jpg';
import meal4 from '../../img/meal-4.jpg';



const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        imagee: {meal1}
    },
    {
        id: 'm2', 
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        imagee: {meal2}
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        imagee: {meal3}
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        imagee: {meal4}
    },
];

const WeeklyMeals = () => {
    const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} title={meal.name} description={meal.description} price={meal.price} imagex={meal.imagee}></MealItem>)

    return (
        <div>
            <h1>Weekly Meals</h1>
            {mealList}
        </div>
    )
}

export default WeeklyMeals