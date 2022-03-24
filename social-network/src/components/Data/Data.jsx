import React from 'react';
import data_classes from './Data.module.css';


const Data = () => {
    return <div className={`${data_classes.data} widget`}>
        <div className={data_classes.name}>Винокуров Александр</div>
        <div className={data_classes.status}>ВундерВуфля</div>
        <div className={data_classes.info}>
            <a className={data_classes.info_item} href="#">
                <div>Friends</div>
                <div>41</div>
            </a>
            <a className={data_classes.info_item} href="#">
                <div>Photos</div>
                <div>6</div>
            </a>
            <a className={data_classes.info_item} href="#">
                <div>Music</div>
                <div>43</div>
            </a>
        </div>
    </div>
}

export default Data
