import { Post } from "../post item/Post"

export const MyPosts = () => {
    return(
        <div>
            <h2>My Posts</h2>
            <Post message={'post 1'}/>
            <Post message={'post 2'}/>
        </div>
    )
}