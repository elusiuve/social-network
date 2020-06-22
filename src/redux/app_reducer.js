import {getUserData} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getUserData())
        Promise.all([promise]).then(() => {
            dispatch(initialized())
        })
    }
}

export default appReducer;