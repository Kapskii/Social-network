import { Post } from "../post item/Post"

export const MyPosts = () => {

const postDate = [
    {id: '1', post: 'Hello World'},
    {id: '2', post: 'My name Slava Kapski'},
    {id: '3', post: 'I like React'},
    {id: '5', post: 'Good job!'},
]


    return(
        <div>
            <h2>My Posts</h2>
            {postDate.map(el => <Post message={el.post}/>)}
        </div>
    )
}