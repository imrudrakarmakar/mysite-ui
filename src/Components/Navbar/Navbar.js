import React from 'react';
import './Navbar.css';
import logo from './mysite.png';
import {Avatar} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="navbar__main">
                <div className="navbar__logo">
                    <NavLink to="/"><img className="logo__prop" src={logo} alt="logo" /></NavLink>
                </div>
                <div className="navbar__usersection">
                    <div className="navbar__usericon">
                        <AccountCircleIcon fontSize="large" />
                        <p style={{fontSize:"18px", fontWeight:"600"}}>Rudra</p>
                    </div>
                    <div className="navbar__notification">
                        <NotificationsNoneIcon fontSize="large" />
                    </div>
                    <div className="navbar__faq">
                        <HelpOutlineIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
