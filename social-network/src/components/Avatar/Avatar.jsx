import React from 'react';
import avatar_classes from './avatar.module.css';
import logo from "../../logo.svg";



const Avatar = () => {
    return <div className={`${avatar_classes.profile} widget`}>
        <img className={avatar_classes.avatar} src={logo} alt="avatar"/>
        <button className={avatar_classes.edit}>Edit</button>
    </div>
}

export default Avatar
