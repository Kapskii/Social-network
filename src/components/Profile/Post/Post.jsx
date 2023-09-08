import React from 'react';
import s from './Post.module.css'
import avatar from '../../../common/img/avatar.jpg'

const Post = (props) => {
  return (
    <div className={s.content}>
      <div className={s.item}>
        <img src={avatar} alt='avatar'/>
        {props.message}
      </div>
      <span>Like</span> {props.likesCount}
    </div>
  )
}

export default Post;