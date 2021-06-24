import React from 'react'
import classes from './Cards.module.css'

const Cards = ({ gitInfo }) => {
    let display;
    if (gitInfo === [] || gitInfo === undefined) {
        display = <p>Loading....</p>
        console.log(gitInfo)
    } else {
        display = <p>It has arrived</p>
        console.log(gitInfo)
    }

    return (
        <div className={classes.Cards}>{display}</div>
    )
}

export default Cards;