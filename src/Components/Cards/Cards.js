import React from 'react'
import classes from './Cards.module.css'
import Spinner from '../Spinner/Spinner'

const Cards = ({ gitInfo }) => {

    console.log(gitInfo)
    let display;
    if (gitInfo === undefined) {
        display = <Spinner />
    } else {
        display = gitInfo.map(git => {
            return (<div className={classes.CardsContainer}>
                <div className={classes.LeftSide}>
                    <div>{git.description}</div>
                    <div>{git.Author}</div>
                    <div>{git.Title}</div>
                </div>
                <div className={classes.RightSide}>
                    <div>{git.forks}</div>
                    <div>{git.stars}</div>
                    <div>{git.open_issues}</div>
                </div>
            </div>
            )

        })


    }

    return (
        <>{display}</>
    )
}

export default Cards;