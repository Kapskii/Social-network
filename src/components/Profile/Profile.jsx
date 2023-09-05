import React from 'react';
import s from './Profile.module.css'
import Post from './Post/Post';



const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className={s.car} src='https://quto.ru/service-imgs/4c/f8/f3/f4/4cf8f3f44d42a.jpeg' />
    </div>
    <div className='input'>
      <input type='text'></input>
      <button>Добавить пост</button>
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
}

export default Profile;