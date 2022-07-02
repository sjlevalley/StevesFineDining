import { useState, useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import classes from './CartItem.module.css'

const CartItem = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const price = `$${props.price.toFixed(2)}`
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={btnClasses} onClick={props.onRemove}>
          −
        </button>
        <button className={btnClasses} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  )
}

export default CartItem
