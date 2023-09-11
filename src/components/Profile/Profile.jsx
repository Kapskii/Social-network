import React from 'react';
import s from './Profile.module.css'
import Posts from './Post/Post';
import { AddPostForm } from './AddPostForm/AddPostForm';
import avatarP from '../../common/img/avatarP.jpg';


const postData = [
  { id: 1, message: 'How are u?', likesCount: 22 },
  { id: 2, message: "I'm fine!", likesCount: 12 }
]

export const Profile = () => {

  const posts = postData.map(p => <Posts message={p.message} likesCount={p.likesCount} />)

  return <div>
    <div className={s.image}>
      <img className={s.picture} src='https://img.goodfon.ru/original/2880x1800/1/eb/linii-polosy-diagonal-kosye-fon.jpg' />
    </div>

    <div className={s.profileWrapper}>
      <div className={s.profileInfo}>
        <img className={s.avatarP} src={avatarP} alt='profile avatar' />
        <div className={s.name}>Slava Kapski</div>
      </div>
      <div className={s.addPostForm}>
        <AddPostForm />
        {posts}
      </div>
    </div>


  </div>
}


