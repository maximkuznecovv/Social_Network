import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsType, SidebarType} from '../../redux/sidebar-reducer';
import {SidebarPropsType} from './SidebarContainer';


export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <div className={s.sidebar}>
            <nav>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <SidebarFriendsBlock friends={props.sidebar.friends}/>
        </div>
    )
}

const SidebarFriendsBlock: React.FC<SidebarType> = (props) => {

    const friendItem = props.friends.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)

    return (
        <div className={s.friendWrapper}>
            <h3>Friends</h3>
            <div className={s.friendBlock}>
                {friendItem}
            </div>
        </div>
    )
}

const Friend: React.FC<FriendsType> = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.imgProfilePhoto}></div>
                <p className={s.name}>{props.name}</p>
        </div>
    )
}