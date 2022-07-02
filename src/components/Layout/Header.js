import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import mealsImage2 from '../../assets/mealsImage2.jpg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Steve's Fine Dining</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage2} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  )
}

export default Header
