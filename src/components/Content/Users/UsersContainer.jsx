import React from 'react';
import { connect } from 'react-redux';
import {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  setIsFetching,
  getUsersThunk,
} from '../../../Redux/users-reducer';
import Users from './Users';
import preLoader from '../../../common/Preloader/Spinner-2.gif';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  onChangedPage = (pageNamber) => {
    this.props.getUsersThunk(pageNamber, this.props.pageSize);
    this.props.setCurrentPage(pageNamber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <img src={preLoader} alt={'loading'} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onChangedPage={this.onChangedPage}
          users={this.props.users}
          follow={this.props.followThunk}
          unfollow={this.props.unfollowThunk}
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  setIsFetching,
  getUsersThunk,
})(UsersContainer);
