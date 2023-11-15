import React from "react";
import s from './Profile.module.css'
import { MyPosts } from "./posts/MyPosts";
import { ProfilePageType } from "../../redux/types";
import { ProfileDate } from "./profile date/ProfileDate";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateTextArea: (text: string | undefined) => void
}

export const Propfile = (props: PropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.imageWrapper}>
                    <img className={s.img} src="https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desert" />
                </div>
                <div className={s.profileWrapper}>
                    <ProfileDate />
                    <MyPosts profilePageItems={props.profilePage} addPost={props.addPost} updateTextArea={props.updateTextArea} />
                </div>
            </div>
        </div>
    )
}