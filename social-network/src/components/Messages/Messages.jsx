import React from 'react';
import mess_classes from './Messages.module.css';
import nav_classes from './../Navbar/Nav.module.css';
import {
    ArrowLeftOutlined, AudioOutlined, CameraOutlined,
    DeleteOutlined, FileAddOutlined, PaperClipOutlined,
    PlusCircleOutlined,
    SearchOutlined, SendOutlined, SmileOutlined, VideoCameraOutlined
} from "@ant-design/icons";
import {NavLink, Route} from "react-router-dom";
import logo from "../../logo.svg";
import {Menu} from 'antd';

const {SubMenu} = Menu;


const Message = (props) => {
    return <div className={mess_classes.message}>
        <img className={mess_classes.mess_author_img} src={props.author_photo} alt="logo"/>
        <div>
            <NavLink to={'#'} className={mess_classes.mess_name}>{props.author_name}</NavLink>
            <div className={mess_classes.mess_text}>{props.mess}</div>
        </div>
        <div className={mess_classes.mess_time}>{props.time}</div>
    </div>
}

const linkToMessages = (props) => {

    return <NavLink to="/mess/dialog/1" className={mess_classes.item}>
        <img className={mess_classes.avatar} src={logo} alt="logo"/>
        <div className={mess_classes.info}>
            <div className={mess_classes.name}>{props.firstName} {props.lastName}</div>
            <div className={mess_classes.last_mess}>
                <img className={mess_classes.author} src={logo} alt="logo"/>
                <div className={mess_classes.data}>{props.lastMessage}</div>
            </div>
        </div>
    </NavLink>
}


const MessageMenu = () => {
    return (
        <div className={mess_classes.menu}>
            <Menu mode="inline">
                <SubMenu key="sub1" icon={<PaperClipOutlined/>}>
                    <Menu.ItemGroup>
                        <Menu.Item key="1" icon={<CameraOutlined/>}>Photo</Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>Video</Menu.Item>
                        <Menu.Item key="3" icon={<FileAddOutlined/>}>File</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        </div>
    );
}

const Dialog = (props) => {

    const dialog_mess = props.props

    return (
        <div>
            <div className={mess_classes.title}>

                <div className={mess_classes.back}>
                    <NavLink className={`${nav_classes.a} ${mess_classes.a}`} to={'/mess/all'}><ArrowLeftOutlined/>Back</NavLink>
                </div>
                <div className={mess_classes.title_name}>{`${dialog_mess.firstName} ${dialog_mess.lastName}`}</div>
                <NavLink className={mess_classes.dialog_user} to={'#'}><img src={logo} alt="logo"/></NavLink>
            </div>
            <div className={mess_classes.all_messages}>
                {dialog_mess.messages.map(mess_item => Message(mess_item))}
            </div>
            <div className={mess_classes.footer}>
                <MessageMenu/>
                <div className={mess_classes.inputBox}>

                    <input type={'text'} placeholder={'Write something'}/>
                    <SmileOutlined/>

                </div>
                <AudioOutlined style={{width: '44px'}}/>
                <SendOutlined style={{width: '44px'}}/>
            </div>
        </div>)
}

const AllMessages = (props) => {

    return <div>
        <div className={mess_classes.search}>
            <SearchOutlined className={mess_classes.search_icon}/>
            <input type={'text'} placeholder={'Search'}/>
            <PlusCircleOutlined/>
            <DeleteOutlined/>
        </div>
        <div className={mess_classes.area_items}>

            {props.props.map(mess_item => linkToMessages(mess_item))}

        </div>
    </div>
}

const Messages = (props) => {

    const mess = props.mess

    return <div className={mess_classes.page_dialogs}>
        <div className={`${mess_classes.dialogs} widget`}>

            <Route path='/mess/all' render={() => <AllMessages props={mess.allMessages}/>}/>
            <Route path='/mess/dialog/1' render={() => <Dialog props={mess.dialog}/>}/>

        </div>
        <nav className={`${mess_classes.nav} widget ${nav_classes.nav}`}>
            <ul className={nav_classes.ul}>
                <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/mess/all"
                                                        activeClassName={mess_classes.active}>All
                    chats</NavLink></li>
                <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/mess/unread"
                                                        activeClassName={mess_classes.active}>Unread</NavLink></li>
                <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/mess/contacts"
                                                        activeClassName={mess_classes.active}>Contacts</NavLink></li>
                <li className={nav_classes.li}><NavLink className={nav_classes.a} to="/mess/important"
                                                        activeClassName={mess_classes.active}>Important
                    messages</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}


export default Messages
