import React from 'react';
import logo from "../../logo.svg";
import classes from './Header.module.css';

const Header = () => {
    return <header className={`${classes.header} widget`}>
        <img className={classes.logo} src={logo} alt="logo"/>
        <div>
            <input className={classes.inputBox} type={'text'}/>
        </div>
    </header>
}

export default Header
