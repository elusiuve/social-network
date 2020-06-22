const SEND_MESSAGUE = 'SEND_MESSAGUE';

let initialState = {
    messagues: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Let me ask u smthing...'},
        {id: 3, message: 'Tomorrow morning'},
        {id: 4, message: 'I forgot about it...'},
    ],
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Yulia'},
        {id: 3, name: 'Volodimir'},
        {id: 4, name: 'Evgen'},
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGUE: {
            let body = action.newMessagueBody;
            return {
                ...state,
                messagues: [...state.messagues, {id: 5, message: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessagueCreator = (newMessagueBody) => ({type: SEND_MESSAGUE, newMessagueBody})

export default messagesReducer;