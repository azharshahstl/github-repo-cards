import React from 'react';
import classes from './Button.module.css'

const Button = ({ submit, disable }) => {
    return (
        <div className={classes.LargeButtonDiv}>
            <button className={classes.LargeButton} disabled={disable} onClick={submit} >
                SUBMIT
            </button>
        </div>
    )
}

export default Button;