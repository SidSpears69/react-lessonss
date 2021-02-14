import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress } from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader";
import UsersAPI from "../../api/api";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    followingProgress={this.props.followingProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);