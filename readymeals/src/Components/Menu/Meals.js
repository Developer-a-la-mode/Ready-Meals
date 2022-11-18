import React from 'react';
import classes from './Meals.module.css';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const Meals = () => {
    const mealList = DUMMY_MEALS.map(meal => <Card title={meal.name} description={meal.description} price={meal.price}></Card>)
    return (
        <section>
            <ul>
                {mealList}
            </ul>
        </section>
    )
}

export default Meals;