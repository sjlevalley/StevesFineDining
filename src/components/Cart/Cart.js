import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cartCtx = useContext(CartContext)

  const hasItems = cartCtx.items.length > 0
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

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

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem(item)
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const btnClasses = `${btnIsHighlighted ? classes.bump : ''}`

  const submitOrderHandler = async userData => {
    setIsSubmitting(true)
    await fetch(
      'https://steves-fine-dining-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        })
      }
    )
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={btnClasses}>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Success! Your order has been sent...</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart
