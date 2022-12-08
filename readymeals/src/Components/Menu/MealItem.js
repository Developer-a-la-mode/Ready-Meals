import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {
    const bgimage = props.imagex;

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const onAddToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <div className={classes.card} style={{ backgroundImage: `url(${bgimage})` }}>
            <div className={classes.card__content}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h2>{price}</h2>
                <MealItemForm onAddToCart={onAddToCartHandler} />
            </div>
        </div>
    )
}

export default MealItem;
