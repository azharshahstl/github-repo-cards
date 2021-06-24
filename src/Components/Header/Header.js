import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Octocat from '../../assets/images/64427.png'

const Header = () => {
    return (
        <nav className={classes.Header}>

            <ul>
                <li>
                    <img src={Octocat} alt="Octo Cat" />
                </li>
                <li>
                    <NavLink to="/" activeClassName={classes.active} >Input Field</NavLink>
                </li>
                <li>
                    <NavLink to="/cards" activeClassName={classes.active} >Repo Cards</NavLink>
                </li>
            </ul>
        </nav >
    )
}
export default Header;