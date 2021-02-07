import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if(text) {
      props.addPost(text);
      newPostElement.current.value = "";
    }
  }

  let PostElements = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} />))

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={ addPost }>Add post</button></div>
      </div>
      <div className={s.posts}>
        { PostElements }
      </div>
    </div>
  )
}

export default MyPosts;