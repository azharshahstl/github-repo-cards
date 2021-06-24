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
                    <div className={classes.Description}>{git.description === null ? <p>No Description </p> : <p>{git.description}</p>}</div>
                    <div className={classes.Author}>{git.Author}</div>
                    <div className={classes.Title}>{git.Title}</div>
                </div>
                <div className={classes.RightSide}>
                    <div className={classes.Forks}>{git.forks} forks</div>
                    <div className={classes.Stars}>{git.stars} stars</div>
                    <div className={classes.Issues}>{git.open_issues} open issues</div>
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