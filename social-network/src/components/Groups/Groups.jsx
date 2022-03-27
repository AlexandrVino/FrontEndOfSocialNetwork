import React from 'react';
import groups_classes from './Groups.module.css';

const GroupItem = (group) => {

    return <div className={groups_classes.group_item}>
        <img src={group.group_photo} alt="group" className={groups_classes.group_photo}/>
        <a className={groups_classes.group_info} href={group.href}>
            <div className={groups_classes.group_name}>{group.firstName}</div>
            <div className={groups_classes.description}>{group.description}</div>
        </a>
    </div>
}


const Groups = (props) => {

    const groups = props.props
    return <div className={`${groups_classes.data} widget`}>
        <div className={groups_classes.groups}>
            Подписки
            <span className={groups_classes.count}>{groups.length}</span>
        </div>

        {groups.slice(0, 5).map(item => GroupItem(item))}
    </div>
}

export default Groups
