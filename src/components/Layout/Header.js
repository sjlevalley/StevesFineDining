import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

export default function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Steve's Fine Dining</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A Table of Food" />
            </div>
        </React.Fragment>
    )
}
