import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from './HeaderContainer';

export const Header = (props: HeaderPropsType) => {
    return (
            <header className={s.header}>
                <img src='https://www.flaticon.com/svg/vstatic/svg/187/187869.svg?token=exp=1616179800~hmac=aabff51c2e666c9fed3395e8d06b88cf'/>

                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/LoginForm'}>Login</NavLink> }
                </div>
            </header>)
}
