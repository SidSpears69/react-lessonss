import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import profilePhoto from "../../../assets/images/users.png";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  debugger;
  if(!props.profile) {
    return <Preloader />
  }
    return (
      <div>
        {/* <img src="https://rgdb.ru/images/News_main/2018/10/12/canada01.jpg"></img> */}
        <div className={s.descriptionBlock}>
          <div>
          <img src={props.profile.photos.large ? props.profile.photos.large : profilePhoto} alt="" />
            <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
      </div>
  )
}

export default ProfileInfo;
