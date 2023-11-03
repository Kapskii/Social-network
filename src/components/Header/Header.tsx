import React from "react";
import s from './Header.module.css'
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <header className={s.header}>
                <h3>Social Network</h3>
            </header>
            <Navigation/>
        </div>
    )
}