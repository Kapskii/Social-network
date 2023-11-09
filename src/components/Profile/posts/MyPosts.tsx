import { PostType } from "../../../App"
import { Post } from "../post item/Post"


type PropsType = {
    post: PostType[]
}


export const MyPosts = (props:PropsType ) => {

    return(
        <div>
            <h2>My Posts</h2>
            {props.post.map(el => <Post message={el.post}/>)}
        </div>
    )
}