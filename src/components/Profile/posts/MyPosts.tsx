// import { ChangeEvent, useState } from "react"
import { PostType } from "../../../redux/types"
import { Post } from "../post item/Post"
import s from './MyPosts.module.css'
import React from "react"


type PropsType = {
    post: PostType[]
    addPost: (text: string | undefined) => void
}


export const MyPosts = (props: PropsType) => {

    // const [post, setPost] = useState('')

    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     const value = e.currentTarget.value
    //     setPost(value)
    // }

    // const addPostHandler = () => {
    //     props.addPost(post)
    // }

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostHandler = () => {
        let newPost = newPostElement.current?.value;
        props.addPost(newPost);
        if (newPostElement.current?.value !== null && newPostElement.current?.value !== undefined) {
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.postWrapper}>
            <h2 className={s.title}>My Posts</h2>
            <div className={s.postCreateBlock}>
                {/* <textarea rows={3} onChange={onChangeHandler}/> */}
                <textarea ref={newPostElement} />
                <button onClick={addPostHandler}>New Post</button>
            </div>
            {props.post.map(el => <Post message={el.post} />)}
        </div>
    )
}