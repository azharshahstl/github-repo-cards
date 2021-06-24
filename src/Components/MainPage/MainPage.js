import React from 'react';
import classes from './MainPage.module.css'


const MainPage = (props) => {
    let checkForSuccess;

    if (props.actionDisplay === "success") {
        checkForSuccess = <>
            <input type="text" className={classes.Success}
                typing={props.typing}
                id="answer"
                placeholder="Your answer"
                value={props.value}
                onBlur={props.blur}
                onChange={props.change} />
            <p className={classes.SuccessMessage}>Success! Even a broken clock is right twice a day.</p>
        </>
    } else if (props.actionDisplay === "failure") {
        checkForSuccess = <>
            <input type="text" className={classes.Failure}
                typing={props.typing}
                id="answer"
                placeholder="Your answer"
                value={props.value}
                onBlur={props.blur}
                onChange={props.change} />
            <p className={classes.FailureMessage}>You have failed me for the last time.</p>
        </>
    } else if (props.actionDisplay === "default" || props.actionDisplay === "typing") {
        checkForSuccess = <input type="text" className={classes.Input}
            typing={props.typing}
            id="answer"
            placeholder="Your answer"
            value={props.value}
            onBlur={props.blur}
            onChange={props.change} />
    }

    return (
        <div className={classes.InputDiv}>
            <p className={classes.Required}>{props.require}</p>
            {props.require ?
                <label htmlFor="answer" className={classes.AddAstericks}>
                    Enter Github profile here:
                </label> :
                <label htmlFor="answer" className={classes.InputLabel}>
                    Enter Github profile here:
                </label>}
            {checkForSuccess}
        </div>
    )

}

export default MainPage;