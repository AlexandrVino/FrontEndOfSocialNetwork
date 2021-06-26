import React from 'react';
import classes from './Nav.module.css';


const Navbar = () => {
    return <nav className={`${classes.nav} widget`}>
        <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Api</a></li>
        </ul>
    </nav>
}

export default Navbar
