import { PostType } from "../../../redux/types"
import { Post } from "../post item/Post"
import s from './MyPosts.module.css'


type PropsType = {
    post: PostType[]
}


export const MyPosts = (props:PropsType ) => {

    return(
        <div className={s.postWrapper}>
            <h2 className={s.title}>My Posts</h2>
            <div className={s.postCreateBlock}>
            <textarea rows={5} cols={80}></textarea>
            <button>New Post</button>
            </div>
            {props.post.map(el => <Post message={el.post}/>)}
        </div>
    )
}