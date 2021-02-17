import Header from "./Header";
import React from 'react';
import { getAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);