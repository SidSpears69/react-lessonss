import React from 'react';
import Profile from "./Profile"
import {setUserProfile} from "../../redux/profile-reducer";
import axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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
    profile: state.profilePage.profile
  }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);