import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'

export default function MealItem(props) {

    const cartContext = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        console.log(props)
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
