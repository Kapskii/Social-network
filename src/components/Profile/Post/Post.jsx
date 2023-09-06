import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.content}>
      <div className={s.item}>
        <img src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'/>
        {props.message}
      </div>
    </div>
  )
}

export default Post;