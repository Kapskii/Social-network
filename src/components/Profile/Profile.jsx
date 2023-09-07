import React from 'react';
import s from './Profile.module.css'
import Post from './Post/Post';



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
      <button>Добавить пост</button>
      </div>
    </div> 
     <Post message='How are u?' likesCount='2' />
    <Post message="I'm fine!" likesCount='23'/>
  </div>
}

export default Profile;