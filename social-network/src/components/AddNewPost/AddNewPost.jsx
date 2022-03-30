import React from 'react';
import post_classes from './AddNewPost.module.css';
import logo from "../../logo.svg";
import {CameraOutlined, PlayCircleOutlined, SendOutlined, SoundOutlined} from "@ant-design/icons";


let addPostActionCreator = (props) => {

    return {
        type: 'ADD-POST',
        postMessage: props.postMessage
    }
}

const AddNewPost = (props) => {

    let newPostElement = React.createRef();

    function OnClickTest() {

        let data = newPostElement.current.value;
        props.dispatch(addPostActionCreator({ postMessage: data}))
        props.renderPage()
    }


    return <div className={`${post_classes.post} widget`}>
        <div className={post_classes.title}>
            <div style={{display: 'flex'}}>
                <img className={post_classes.avatar} src={logo} alt="logo"/>

                <input className={post_classes.inputBox} ref={newPostElement} type='text' placeholder='Anything new?'/>
            </div>
            <div className={post_classes.icon}>
                <CameraOutlined/>
                <PlayCircleOutlined/>
                <SoundOutlined/>
                <SendOutlined onClick={OnClickTest}/>

            </div>


        </div>
    </div>
}

export default AddNewPost
