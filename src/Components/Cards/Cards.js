import React from 'react'
import classes from './Cards.module.css'
import Spinner from '../Spinner/Spinner'
import Star from '../../assets/images/star.png'
import Fork from '../../assets/images/code-fork-symbol.png'

const Cards = ({ gitInfo }) => {

    console.log(gitInfo)
    let display;
    if (gitInfo === undefined) {
        display = <Spinner />
    } else {
        display = gitInfo.map(git => {
            return (<div className={classes.CardsContainer}>
                <div className={classes.LeftSide}>
                    <div className={classes.Description}>{git.description === null ? "No Description" : `${git.description}`}</div>
                    <div className={classes.Author}>{git.Author}</div>
                    <div className={classes.Title}>{git.Title}</div>
                </div>
                <div className={classes.RightSide}>
                    <div className={classes.Forks}><img src={Fork} alt="coding fork" /> {git.forks} forks</div>
                    <div className={classes.Stars}><span><img src={Star} alt="star" /></span><span>{git.stars} stars</span></div>
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