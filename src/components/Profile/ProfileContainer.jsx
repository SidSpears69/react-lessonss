import React from 'react';
import Profile from "./Profile"
import {getUserProfile} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props}/>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer);