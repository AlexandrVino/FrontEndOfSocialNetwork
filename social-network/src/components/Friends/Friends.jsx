import React from 'react';
import friends_classes from './Friends.module.css';

const FriendItem = (friend) => {

    let name = friend.firstName.slice(0, 7) + (friend.firstName.length < 8 ? '': '...')

    return <a className={friends_classes.friend_item} href={friend.href}>
        <img src={friend.profile_photo} alt="friend" className={friends_classes.friend_photo}/>
        <span className={friends_classes.friend_name}>{name}</span>
    </a>
}


const Friends = (props) => {

    const friends = props.props
    return <div className={`${friends_classes.data} widget`}>
        <div className={friends_classes.friends}>
            Друзья
            <span className={friends_classes.count}>{friends.length}</span>
        </div>

        <div className={friends_classes.friends_wrapper}>
            {friends.slice(0, Math.min(Math.floor(friends.length / 3) * 3, 9)).map(item => FriendItem(item))}
        </div>
    </div>
}

export default Friends
