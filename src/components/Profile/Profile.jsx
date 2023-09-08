import React from 'react';
import s from './Profile.module.css'
import Post from './Post/Post';


let postData = [
  {id: 1, message: 'How are u?', likesCount: 22},
  {id: 2, message: "I'm fine!", likesCount: 12}
]
let posts = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

const Profile = () => {
  return <div>
    <div className={s.image}>
      <img className={s.car} src='https://quto.ru/service-imgs/4c/f8/f3/f4/4cf8f3f44d42a.jpeg' />
    </div>
    <div className={s.textarea}> 
    <div>
      <textarea></textarea>
      </div>
      <div>
      <button>Add Post</button>
      </div>
    </div> 
     {posts}
  </div>
}

export default Profile;