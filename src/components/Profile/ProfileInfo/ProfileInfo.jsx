import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <img src="https://rgdb.ru/images/News_main/2018/10/12/canada01.jpg"></img>
        <div className={s.descriptionBlock}>
          <div>ava + description</div>
        </div>
      </div>
  )
}

export default ProfileInfo;
