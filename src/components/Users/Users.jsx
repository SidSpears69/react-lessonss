import s from './Users.module.css';
import userPhoto from "../../assets/images/users.png";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                                () => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                                        withCredentials: true,
                                        headers: {
                                            "API-kEY": "49a5cb30-11eb-42df-98c9-8b8f0d1ce9c5"
                                        } 
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        })
                                }
                            }>Unfollow</button> :
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={
                                () => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-kEY": "49a5cb30-11eb-42df-98c9-8b8f0d1ce9c5"
                                        } 
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        })
                                }
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