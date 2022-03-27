import React from 'react';
import data_classes from './Data.module.css';
import {NavLink} from "react-router-dom";


const Data = () => {
    return <div className={`${data_classes.data} widget`}>
        <div className={data_classes.name}>Винокуров Александр</div>
        <div className={data_classes.status}>ВундерВуфля</div>
        <div className={data_classes.info}>
            <NavLink className={data_classes.info_item} to="#">
                <div>Friends</div>
                <div>41</div>
            </NavLink>
            <NavLink className={data_classes.info_item} to="#">
                <div>Photos</div>
                <div>6</div>
            </NavLink>
            <NavLink className={data_classes.info_item} to="#">
                <div>Music</div>
                <div>43</div>
            </NavLink>
        </div>
    </div>
}

export default Data
