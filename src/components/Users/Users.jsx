import s from './Users.module.css';
import userPhoto from "../../assets/images/users.png";
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => <button className={props.currentPage == p && s.selectedPage} onClick={() => props.onPageChanged(p)}>{p}</button>)}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <p>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="" className={s.photo} />
                        </NavLink>
                    </p>
                    <p>
                        {u.followed ?
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={
                                () => {props.unfollow(u.id)}
                            }>Unfollow</button> :
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={
                                () => {props.follow(u.id)}
                            }>Follow</button>}
                    </p>
                </div>
                <div>
                    <div>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{"u.location.country"}</p>
                        <p>{"u.location.city"}</p>
                    </div>
                </div>
            </div>
            )
            }
        </div >
    )
}

export default Users;