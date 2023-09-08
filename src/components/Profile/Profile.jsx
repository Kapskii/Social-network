import React from 'react';
import s from './Profile.module.css'
import Posts from './Post/Post';
import { AddPostForm } from './AddPostForm/AddPostForm';


const postData = [
  { id: 1, message: 'How are u?', likesCount: 22 },
  { id: 2, message: "I'm fine!", likesCount: 12 }
]

export const Profile = () => {

  const posts = postData.map(p => <Posts message={p.message} likesCount={p.likesCount} />)

  return <div>
    <div className={s.image}>
      <img className={s.picture} src='https://img.goodfon.ru/original/2500x1667/2/50/neon-perelivy-volny-igra-sveta-kompiuternaia-grafika-plamia.jpg' />
    </div>
    <AddPostForm />
    {posts}
  </div>
}


