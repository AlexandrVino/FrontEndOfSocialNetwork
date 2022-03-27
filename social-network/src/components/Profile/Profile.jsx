import React from 'react';
import profile_classes from './Profile.module.css';
import Avatar from "../Avatar/Avatar";
import Data from "../Data/Data";
import AddNewPost from "../AddNewPost/AddNewPost";
import Post from "../Post/Post";
import Friends from "../Friends/Friends";
import Groups from "../Groups/Groups";


const Profile = (props) => {

    const profile_data = props.profile_data

    return <div className={`${profile_classes.content}`}>
        <div className={`${profile_classes.row}`}>
            <Avatar/>
            <Friends props={profile_data.friends}/>
            <Groups props={profile_data.groups}/>

        </div>
        <div className={`${profile_classes.row}`}>
            <Data/>
            <AddNewPost addPost={props.addPost}/>
            {profile_data.posts.map(item => Post(item))}
        </div>
    </div>
}

export default Profile
