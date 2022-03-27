import React from 'react';
import post_classes from './Post.module.css';
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return <div className={`${post_classes.post} widget`}>
        <div className={post_classes.title}>
            <img className={post_classes.avatar} src={logo} alt="logo"/>
            <div className={post_classes.name}>
                <NavLink to='#'>{`${props.firstName} ${props.lastName}`}</NavLink>
            </div>
        </div>
        <div className={post_classes.content}>
            <p className={post_classes.text}>{props.message}</p>
            <img className={post_classes.photo} src={props.image} alt="logo"/>
        </div>
    </div>
}

export default Post
