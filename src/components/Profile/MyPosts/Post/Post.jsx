import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.kinoafisha.info/upload/news/596493856698.jpg" alt=""/>
          {props.message}
          <p>{props.likesCount}</p>
        </div>
    )
}

export default Post;