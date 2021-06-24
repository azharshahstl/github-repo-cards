import React from 'react';
import classes from './Button.module.css'

const Button = ({ submit }) => {
    return (
        <div className={classes.LargeButtonDiv}>
            <button className={classes.LargeButton} onClick={submit} >
                SUBMIT
            </button>
        </div>
    )
}

export default Button;