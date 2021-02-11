import MyPostsContainer from './MyPosts/MyPostsСontainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;