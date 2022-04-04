import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from '../../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profileUser.profile,
    status: state.profileUser.status,
    authUserId: state.auth.id,
  };
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
