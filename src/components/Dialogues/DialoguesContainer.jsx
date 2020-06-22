import { sendMessagueCreator } from "../../redux/messages_reducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessague: (newMessagueBody) => {
            dispatch(sendMessagueCreator(newMessagueBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogues)