import React from "react"
import Users from "./Users"
import Preloader from "../Common/Preloader/Preloader"

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.setCurrentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default UsersAPIComponent;