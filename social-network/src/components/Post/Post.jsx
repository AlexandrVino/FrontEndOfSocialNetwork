import React from 'react';
import post_classes from './Post.module.css';
import logo from "../../logo.svg";

const Post = () => {
    return <div>
        <img className={post_classes.avatar} src={logo} alt="logo"/>
        <input className={post_classes.inputBox} type={'text'}/>
    </div>
}

export default Post
