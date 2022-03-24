import React from 'react';
import post_classes from './Content.module.css';
import Profile from "../Profile/Profile";
import Data from "../Data/Data";
import AddNewPost from "../AddNewPost/AddNewPost";
import Post from "../Post/Post";
import logo from "../../logo.svg";


const Content = () => {

    const data = [
        {firstName: 'Александр', lastName: 'Винокуров', image: logo},
        {firstName: 'Александр', lastName: 'Винокуров', image: logo},
        {firstName: 'Александр', lastName: 'Винокуров', image: logo}
    ]

    return <div className={`${post_classes.content}`}>
        <div className={`${post_classes.row}`}>
            <Profile/>
        </div>
        <div className={`${post_classes.row}`}>
            <Data/>
            <AddNewPost/>
            {data.map(item => Post(item))}
        </div>
    </div>
}

export default Content
