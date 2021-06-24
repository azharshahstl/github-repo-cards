import React from 'react';
import classes from './MainPage.module.css'


const MainPage = (props) => {
    let checkForSuccess;

    if (props.success === "success") {
        checkForSuccess = <>
            <input type="text" className={classes.Success}
                typing={props.typing}
                id="answer"
                placeholder="Your answer"
                value={props.inputValue}
                onBlur={props.inputBlur}
                onChange={props.inputOnChange} />
            <p className={classes.SuccessMessage}>Success! Even a broken clock is right twice a day.</p>
        </>
    } else if (props.success === "failure") {
        checkForSuccess = <>
            <input type="text" className={classes.Failure}
                typing={props.typing}
                id="answer"
                placeholder="Your answer"
                value={props.inputValue}
                onBlur={props.inputBlur}
                onChange={props.inputOnChange} />
            <p className={classes.FailureMessage}>You have failed me for the last time.</p>
        </>
    } else if (props.success === "default" || props.success === "typing") {
        checkForSuccess = <input type="text" className={classes.Input}
            typing={props.typing}
            id="answer"
            placeholder="Your answer"
            value={props.inputValue}
            onBlur={props.inputBlur}
            onChange={props.inputOnChange} />
    }

    return (
        <div className={classes.InputDiv}>
            <p className={classes.Required}>{props.requiredMessage}</p>
            {props.requiredMessage ?
                <label htmlFor="answer" className={classes.AddAstericks}>

                </label> :
                <label htmlFor="answer" className={classes.InputLabel}>
                    What is the meaning of life?
                </label>}
            {checkForSuccess}
        </div>
    )

}

export default MainPage;