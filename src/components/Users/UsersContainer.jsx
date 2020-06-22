import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { followSucces, unfollowSucces, getUsers, setCurrentPage, toggleIsFollowing, rqUsers, setUsers, setUsersTotalCount, toggleIsFetching } from "../../redux/users_reducer"
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: getUsers(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//         isAuth: getIsAuth(state),
//     }
// }

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        { followSucces, unfollowSucces, setCurrentPage, toggleIsFollowing, getUsers })
)(UsersAPIComponent)