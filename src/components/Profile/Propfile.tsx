import React from "react";
import s from './Profile.module.css'
import { MyPosts } from "./posts/MyPosts";

export const Propfile = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.imageWrapper}>
                    <img className={s.img} src="https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desert" />
                </div>
                
                <div className={s.profileWrapper}>
                    <div className={s.profileInfo}>
                        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <div className={s.nameBlock}>
                            <h2 className={s.profileName}>Slava Kapskij</h2>
                            <span className={s.subTitle}>JS Developer</span>
                        </div>
                    </div>
                    <MyPosts />
                </div>
            </div>
        </div>
    )
}