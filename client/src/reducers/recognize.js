'use strict';

const recognize = (state = {}, action) => {
    switch(action.type) {
        case 'RESET_FILES':
            state = {...state, dropped_files: []}
            return state;
        case 'DROP_FILES':
            if(!Array.isArray(state.dropped_files)) {
                state.dropped_files = [];
            }
            state = {...state, status: 'drop_files', dropped_files: [...state.dropped_files, ...action.files]}
            return state;
        case 'UPLOAD_FILES_ING':
            state = {...state, status: 'upload_files_ing'};
            return state;
        case 'UPLOAD_FILES_DONE':
            state = {...state, status: 'upload_files_done', outputs: action.response.data};
            return state;
        case 'UPLOAD_FILES_ERR':
            state = {...state, status: 'upload_files_err', data: action.err};
            return state;
        default:
            return state;
    }
}

export default recognize;