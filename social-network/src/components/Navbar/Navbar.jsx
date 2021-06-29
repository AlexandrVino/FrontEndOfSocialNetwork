import React from 'react';
import nav_classes from './Nav.module.css';
import {
    ApiOutlined,
    CameraOutlined,
    GroupOutlined,
    HomeOutlined,
    MessageOutlined,
    SoundOutlined,
    TabletOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";


const Navbar = () => {
    return <nav className={`${nav_classes.nav} widget`}>
        <ul>
            <li><a href="#"><HomeOutlined />Profile</a></li>
            <li><a href="#"><TabletOutlined />News</a></li>
            <li><a href="#"><MessageOutlined />Messages</a></li>
            <li><a href="#"><UsergroupAddOutlined />Friends</a></li>
            <li><a href="#"><GroupOutlined />Groups</a></li>
            <li><a href="#"><CameraOutlined />Photos</a></li>
            <li><a href="#"><SoundOutlined />Music</a></li>
            <li><a href="#"><ApiOutlined />Api</a></li>
        </ul>
    </nav>
}

export default Navbar
