import { ChangeEvent, useState } from "react"
import { PostType } from "../../../redux/types"
import { Post } from "../post item/Post"
import s from './MyPosts.module.css'


type PropsType = {
    post: PostType[]
    addPost: (text:string)=>void
}


export const MyPosts = (props: PropsType) => {

    const [post, setPost] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        setPost(value)
    }

    const addPostHandler = () => {
        props.addPost(post)
    }

    return (
        <div className={s.postWrapper}>
            <h2 className={s.title}>My Posts</h2>
            <div className={s.postCreateBlock}>
                <textarea rows={3} onChange={onChangeHandler}></textarea>
                <button onClick={addPostHandler}>New Post</button>
            </div>
            {props.post.map(el => <Post message={el.post} />)}
        </div>
    )
}