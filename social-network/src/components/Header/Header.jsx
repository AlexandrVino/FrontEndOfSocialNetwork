import React from 'react';
import logo from "../../logo.svg";
import header_classes from './Header.module.css';
import {BellOutlined, SearchOutlined} from '@ant-design/icons';

const Header = () => {
    return <header className={`${header_classes.header} widget`}>
        <img className={header_classes.logo} src={logo} alt="logo"/>
        <div className={header_classes.inputBox}>
            <SearchOutlined />
            <input type={'text'} placeholder={'Search'}/>

        </div>
        <div className={header_classes.icon}><BellOutlined /></div>
    </header>
}

export default Header
