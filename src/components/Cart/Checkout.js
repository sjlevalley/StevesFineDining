import { useRef, useState } from 'react';
import classes from './Checkout.module.css';



const isEmpty = (value) => value.trim() === '';
const isCorrectLength = (value) => value.trim().length === 5;


const Checkout = (props) => {
    const [formInputsAreValid, setFormInputsAreValid] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()


    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalCodeIsValid = !isCorrectLength(enteredPostalCode)

        setFormInputsAreValid({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }

        // Submit Card Data
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' placeholder="Enter Name Here..." />
                {formInputsAreValid.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Address</label>
                <input ref={streetInputRef} id='street' type='text' placeholder="Enter Street Address..." />
                {formInputsAreValid.street && <p>Please enter a valid street!</p>}

            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Zip Code</label>
                <input ref={postalInputRef} type='text' placeholder="Enter Zip..." id='postal' />
                {formInputsAreValid.postalCode && <p>Please enter a valid Postal Code  (5 numbers long)!</p>}

            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' placeholder="Enter City..." />
                {formInputsAreValid.city && <p>Please enter a valid city!</p>}

            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;