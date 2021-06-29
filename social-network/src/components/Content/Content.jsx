import React from 'react';
import post_classes from './Content.module.css';
import Profile from "../Profile/Profile";
import Data from "../Data/Data";
import AddNewPost from "../AddNewPost/AddNewPost";


const Content = () => {
    return <div className={`${post_classes.content}`}>
        <Profile/>
        <Data/>
        <AddNewPost/>
    </div>
}

export default Content
