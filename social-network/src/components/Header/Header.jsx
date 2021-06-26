import React from 'react';
import logo from "../../logo.svg";
import header_classes from './Header.module.css';

const Header = () => {
    return <header className={`${header_classes.header} widget`}>
        <img className={header_classes.logo} src={logo} alt="logo"/>
        <div>
            <input className={header_classes.inputBox} type={'text'}/>
        </div>
    </header>
}

export default Header
