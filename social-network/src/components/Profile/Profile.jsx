import React from 'react';
import profile_classes from './Profile.module.css';
import logo from "../../logo.svg";


const Profile = () => {
    return <div className={`${profile_classes.profile} widget`}>
        <img className={profile_classes.avatar} src={logo} alt="avatar"/>
        <button className={profile_classes.edit}>Edit</button>
    </div>
}

export default Profile
