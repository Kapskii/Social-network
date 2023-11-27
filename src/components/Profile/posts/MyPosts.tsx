import { addPostAC, updagteTextareaAC } from "../../../redux/state"
import { ActionType, ProfilePageType } from "../../../redux/types"
import { Post } from "../post item/Post"
import s from './MyPosts.module.css'
import React from "react"


type PropsType = {
    profilePageItems: ProfilePageType
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        props.dispatch(addPostAC());
    }

    const onChangeTextHandler = () => {
        let newText = newPostElement.current?.value;
        
        props.dispatch(updagteTextareaAC(newText))
    }

    return (
        <div className={s.postWrapper}>
            <h2 className={s.title}>My Posts</h2>
            <div className={s.postCreateBlock}>
                <textarea onChange={onChangeTextHandler} ref={newPostElement} value={props.profilePageItems.newPostText} />
                <button onClick={addPostHandler}>New Post</button>
            </div>
            {props.profilePageItems.post.map(el => <Post message={el.post} />)}
        </div>
    )
}