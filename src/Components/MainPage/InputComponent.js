import React from 'react';
import classes from './InputComponent.module.css'


const InputComponent = (props) => {
    let checkForSuccess;

    if (props.actionDisplay === "failure") {
        checkForSuccess = <>
            <input type="text" className={classes.Failure}
                typing={props.typing}
                id="answer"
                placeholder="Your answer"
                value={props.gitName}
                onBlur={props.blur}
                onChange={props.change}
                onFocus={props.focus} />
            <p className={classes.FailureMessage}>No User Found</p>
        </>
    } else if (props.actionDisplay === "default" || props.actionDisplay === "typing") {
        checkForSuccess = <input type="text" className={classes.Input}
            typing={props.typing}
            id="answer"
            placeholder="Your answer"
            value={props.gitName}
            onBlur={props.blur}
            onChange={props.change}
            onFocus={props.focus} />
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

export default InputComponent;