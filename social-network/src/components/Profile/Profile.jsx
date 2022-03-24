import React from 'react';
import profile_classes from './Profile.module.css';
import Avatar from "../Avatar/Avatar";
import Data from "../Data/Data";
import AddNewPost from "../AddNewPost/AddNewPost";
import Post from "../Post/Post";


const Profile = (profile_data) => {

    profile_data = profile_data.profile_data

    return <div className={`${profile_classes.content}`}>
        <div className={`${profile_classes.row}`}>
            <Avatar/>
        </div>
        <div className={`${profile_classes.row}`}>
            <Data/>
            <AddNewPost/>
            {profile_data.posts.map(item => Post(item))}
        </div>
    </div>
}

export default Profile
