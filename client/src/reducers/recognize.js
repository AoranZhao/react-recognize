'use strict';

const recognize = (state = {}, action) => {
    switch(action.type) {
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
            var outputs = {};
            Object.keys(action.response.data).forEach(key => {
                outputs[action.response.data[key].original_file_name] = action.response.data[key].data;
            })
            state = {...state, status: 'upload_files_done', outputs: outputs};
            return state;
        case 'UPLOAD_FILES_ERR':
            state = {...state, status: 'upload_files_err', data: action.err};
            return state;
        default:
            return state;
    }
}

export default recognize;