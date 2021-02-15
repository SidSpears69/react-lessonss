import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let PostElements = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} />));
  let onPostChange = (evt) => {
    let text = evt.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} /></div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {PostElements}
      </div>
    </div>
  )
}

export default MyPosts;