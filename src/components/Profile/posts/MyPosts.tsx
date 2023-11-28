import { addPostAC, updagteTextareaAC } from "../../../redux/state"
import { ActionType, ProfilePageType } from "../../../redux/types"
import { Post } from "../post item/Post"
import s from './MyPosts.module.css'
import React, { ChangeEvent } from "react"


type PropsType = {
    profilePageItems: ProfilePageType
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: PropsType) => {


    const addPostHandler = () => {
        props.dispatch(addPostAC());
    }

    const onChangeTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(updagteTextareaAC(newText))
    }

    return (
        <div className={s.postWrapper}>
            <div className={s.postCreateBlock}>
            <h2 className={s.title}>My Posts</h2>
                <textarea onChange={onChangeTextHandler} value={props.profilePageItems.newPostText} />
                <button onClick={addPostHandler}>New Post</button>
            </div>
            {props.profilePageItems.post.map(el => <Post message={el.post} />)}
        </div>
    )
}