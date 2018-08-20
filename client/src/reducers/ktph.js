'use strict';

const ktph = (state = {}, action) => {
    switch (action.type) {
        case 'KT_PH_UPLOAD_QUESTION_ING':
            state = { ...state, status: 'ing', question: action.question, output: '', err: '' };
            return state;
        case 'KT_PH_UPLOAD_QUESTION_DONE':
            state = { ...state, status: 'done', question: action.data.question, output: action.data.output, err: '' }
            return state;
        case 'KT_PH_UPLOAD_QUESTION_ERR':
            state = { ...state, status: 'err', err: action.err };
            return state;
        case 'KT_PH_RESET_QUESTION':
            state = { question: '' }
            return state;
        default:
            return state;
    }
}

export default ktph;