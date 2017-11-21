'use strict';

const nnin = (state = {}, action) => {
    switch(action.type) {
        case 'UPLOAD_QUESTION_ING':
            state = {...state, question: action.question, output: '', err: ''}
            return state;
        case 'UPLOAD_QUESTION_DONE':
            state = {...state, question: action.data.data.questions, output: action.data.data.output, err: ''}
            return state;
        case 'UPLOAD_QUESTION_ERR':
            state = {...state, output: '', err: action.err}
            return state;
        case 'RESET_QUESTION':
            state = {question: ''}
            return state;
        default:
            return state;
    }
}

export default nnin;