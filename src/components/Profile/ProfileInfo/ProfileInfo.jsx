import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
    return (
      <div>
        <img src="https://rgdb.ru/images/News_main/2018/10/12/canada01.jpg"></img>
        <div className={s.descriptionBlock}>
          <div>
          <img src={props.profile.photos.large}></img>
            ava + description
            </div>
        </div>
      </div>
  )
}

export default ProfileInfo;
