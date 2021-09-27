import classes from './Checkout.module.css';

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' placeholder="Enter Name Here..." />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Address</label>
                <input id='street' type='text' placeholder="Enter Street Address..." />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Zip Code</label>
                <input type='text' placeholder="Enter Zip..." id='postal' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' placeholder="Enter City..." />
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