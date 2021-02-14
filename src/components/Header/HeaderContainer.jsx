import Header from "./Header";
import React from 'react';
import axios from 'axios';
import {setAuthUserData} from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
              let {email, id, login} = response.data.data;
              this.props.setAuthUserData(id, email, login);
            })
  }
   render() {
     return <Header isAuth={this.props.isAuth} login={this.props.login}/>
   }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);