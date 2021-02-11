import axios from 'axios';
import s from './Users.module.css';
import userPhoto from "../../assets/images/users.png";
import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items)
            })
        }
    }
    getUsers = () => {
        // if (this.props.users.length === 0) {
        //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //         .then(response => {
        //             this.props.setUsers(response.data.items)
        //         })
        // }
    }
    render() {
        console.log(this);
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    <div>
                        <p>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="" className={s.photo} />
                        </p>
                        <p>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}
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
                )}
                <button onClick={this.getUsers}>Get Users</button>
            </div>
        );
    }
}

export default Users;