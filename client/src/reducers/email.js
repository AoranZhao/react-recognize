'use strict';

const email = (state = {}, action) => {
    switch (action.type) {
        case 'SEND_EMAIL_ING':
            state = { ...state, status: 'ing', message: 'sending' }
            return state;
        case 'SEND_EMAIL_DONE':
            state = { ...state, status: 'done', message: '' }
            return state;
        case 'SEND_EMAIL_ERR':
            state = { ...state, status: 'err', message: action.err }
            return state;
        case 'UPDATE_EMAIL_BODY':
            state = { ...state, status: 'done', message: '', body: { ...action.data } }
            return state;
        default:
            return state;
    }
}

export default email;