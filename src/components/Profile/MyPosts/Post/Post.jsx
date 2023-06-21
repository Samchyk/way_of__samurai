import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://kartinkof.club/uploads/posts/2022-04/thumbs/1649625257_3-kartinkof-club-p-ugarnie-kartinki-na-avu-dlya-patsanov-v-st-3.jpg' alt='avatar' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;