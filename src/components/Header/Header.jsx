import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
    <header className={s.header}>
    <img src="https://ru.wargaming.net/clans/media/clans/emblems/cl_016/51016/emblem_64x64.png" alt="Логотип"></img>
    <div className={s.loginBlock}>
      {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink> }
    </div>
  </header>
  )
}

export default Header;