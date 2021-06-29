import React from 'react';
import post_classes from './AddNewPost.module.css';
import logo from "../../logo.svg";
import {CameraOutlined, PlayCircleOutlined, SendOutlined, SoundOutlined} from "@ant-design/icons";


const AddNewPost = () => {
    return <div className={`${post_classes.post} widget`}>
        <div className={post_classes.title}>
            <div style={{display: 'flex'}}>
                <img className={post_classes.avatar} src={logo} alt="logo"/>

                <input className={post_classes.inputBox} type={'text'} placeholder={'Anything new?'}/>
            </div>
            <div className={post_classes.icon}>
                <CameraOutlined/>
                <PlayCircleOutlined />
                <SoundOutlined />

            </div>
            <div className={post_classes.send_icon}>
                <SendOutlined />

            </div>

        </div>
    </div>
}

export default AddNewPost
