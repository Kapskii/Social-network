import React from "react";
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <>
            <nav className={s.navWrapper}>
                <div className={s.item}>
                    <NavLink to="/profile" className={({isActive})=>isActive ? s.active : '' } >Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={({isActive})=>isActive ? s.active : ''} >Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="" className={({isActive})=>isActive ? s.active : ''} >News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="" className={({isActive})=>isActive ? s.active : ''} >Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="" className={({isActive})=>isActive ? s.active : ''} >Settings</NavLink>
                </div>
            </nav>
        </>
    )
}