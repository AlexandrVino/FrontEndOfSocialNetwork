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
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={`${nav_classes.nav} widget`}>
        <ul className={nav_classes.ul}>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/me"><HomeOutlined />Profile</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/news"><TabletOutlined />News</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/mess/all"><MessageOutlined />Messages</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="#"><UsergroupAddOutlined />Friends</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="#"><GroupOutlined />Groups</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="#"><CameraOutlined />Photos</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="#"><SoundOutlined />Music</NavLink></li>
            <li className={nav_classes.li}><NavLink className={nav_classes.a} to="#"><ApiOutlined />Api</NavLink></li>
        </ul>
    </nav>
}

export default Navbar
