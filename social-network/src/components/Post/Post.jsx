import React from 'react';
import post_classes from './Post.module.css';
import logo from "../../logo.svg";

const Post = () => {
    return <div className={`${post_classes.post} widget`}>
        <div className={post_classes.title}>
            <img className={post_classes.avatar} src={logo} alt="logo"/>
            <div className={post_classes.name}><a href={'#'}>Винокуров Александр</a></div>
        </div>
        <div className={post_classes.content}>
            <div className={post_classes.text}>Тестовый пост</div>
            <img className={post_classes.photo} src={logo} alt="logo"/>

        </div>
    </div>
}

export default Post
