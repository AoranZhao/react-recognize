'use strict';

export const login_ing = () => ({
    type: 'LOGIN_ING'
})

export const login_done = (response) => ({
    type: 'LOGIN_DONE',
    response: response
})

export const login_err = (err) => ({
    type: 'LOGIN_ERR',
    err: err
})

export const logout = () => ({
    type: 'LOGOUT'
})

// admin
export const get_users_ing = () => ({
    type: 'GET_USERS_ING'
})

export const get_users_done = (response) => ({
    type: 'GET_USERS_DONE',
    response: response
})

export const get_users_err = (err) => ({
    type: 'GET_USERS_ERR',
    err: err
})

export const local_update_user = (email, user) => ({
    type: 'LOCAL_UPDATE_USER',
    email: email,
    user: user
})

export const update_user_ing = () => ({
    type: 'UPDATE_USER_ING'
})

export const update_user_done = (response) => ({
    type: 'UPDATE_USER_DONE',
    response: response
})

export const update_user_err = (err) => ({
    type: 'UPDATE_USER_ERR',
    err: err
})

export const delete_user_ing = () => ({
    type: 'DELETE_USER_ING'
})

export const delete_user_done = (response) => ({
    type: 'DELETE_USER_DONE',
    response: response
})

export const delete_user_err = (err) => ({
    type: 'DELETE_USER_ERR',
    err: err
})

export const add_user_ing = () => ({
    type: 'ADD_USER_ING'
})

export const add_user_done = (response) => ({
    type: 'ADD_USER_DONE',
    response: response
})

export const add_user_err = (err) => ({
    type: 'ADD_USER_ERR',
    err: err
})

// recognize
export const reset_files = () => ({
    type: 'RESET_FILES'
})

export const drop_files = (files) => ({
    type: 'DROP_FILES',
    files: files
})

export const upload_files_ing = () => ({
    type: 'UPLOAD_FILES_ING'
})

export const upload_files_done = () => ({
    type: 'UPLOAD_FILES_DONE'
})

export const upload_analysis_ing = () => ({
    type: 'UPLOAD_ANALYSIS_ING'
})

export const upload_analysis_done = (data, api_dur) => ({
    type: 'UPLOAD_ANALYSIS_DONE',
    data: data,
    api_dur: api_dur
})

export const upload_files_err = (err) => ({
    type: 'UPLOAD_FILES_ERR',
    err: err
})

// socket
export const update_socket = (socket_pack) => ({
    type: 'UPDATE_SOCKET',
    socket_pack: socket_pack
})

// formula ocr
export const fo_reset_files = () => ({
    type: 'FO_RESET_FILES'
})

export const fo_drop_files = (files) => ({
    type: 'FO_DROP_FILES',
    files: files
})

export const fo_upload_files_ing = () => ({
    type: 'FO_UPLOAD_FILES_ING'
})

export const fo_upload_files_done = () => ({
    type: 'FO_UPLOAD_FILES_DONE'
})

export const fo_upload_analysis_ing = () => ({
    type: 'FO_UPLOAD_ANALYSIS_ING'
})

export const fo_upload_analysis_done = (data, api_dur) => ({
    type: 'FO_UPLOAD_ANALYSIS_DONE',
    data: data,
    api_dur: api_dur
})

export const fo_upload_files_err = (err) => ({
    type: 'FO_UPLOAD_FILES_ERR',
    err: err
})

// socket
export const fo_update_socket = (socket_pack) => ({
    type: 'FO_UPDATE_SOCKET',
    socket_pack: socket_pack
})

// autosolve
export const au_reset_files = () => ({
    type: 'AU_RESET_FILES'
})

export const au_drop_files = (files) => ({
    type: 'AU_DROP_FILES',
    files: files
})

export const au_upload_files_ing = () => ({
    type: 'AU_UPLOAD_FILES_ING'
})

export const au_upload_files_done = () => ({
    type: 'AU_UPLOAD_FILES_DONE'
})

export const au_upload_analysis_ing = () => ({
    type: 'AU_UPLOAD_ANALYSIS_ING'
})

export const au_upload_analysis_done = (data, api_dur) => ({
    type: 'AU_UPLOAD_ANALYSIS_DONE',
    data: data,
    api_dur: api_dur
})

export const au_upload_files_err = (err) => ({
    type: 'AU_UPLOAD_FILES_ERR',
    err: err
})

export const au_update_type = (question_type) => ({
    type: 'AU_UPDATE_TYPE',
    question_type: question_type
})

// socket
export const au_update_socket = (socket_pack) => ({
    type: 'AU_UPDATE_SOCKET',
    socket_pack: socket_pack
})

// nnin
export const upload_question_ing = (question) => ({
    type: 'UPLOAD_QUESTION_ING',
    question: question
})

export const upload_question_done = (data) => ({
    type: 'UPLOAD_QUESTION_DONE',
    data: data
})

export const upload_question_err = (err) => ({
    type: 'UPLOAD_QUESTION_ERR',
    err: err
})

export const reset_question = () => ({
    type: 'RESET_QUESTION'
})

// knowledge tagging jixin
export const ktjx_reset_files = () => ({
    type: 'KTJX_RESET_FILES'
})

export const ktjx_drop_files = (files) => ({
    type: 'KTJX_DROP_FILES',
    files: files
})

export const ktjx_upload_files_ing = () => ({
    type: 'KTJX_UPLOAD_FILES_ING'
})

export const ktjx_upload_files_done = () => ({
    type: 'KTJX_UPLOAD_FILES_DONE'
})

export const ktjx_upload_analysis_ing = () => ({
    type: 'KTJX_UPLOAD_ANALYSIS_ING'
})

export const ktjx_upload_analysis_done = (data, api_dur) => ({
    type: 'KTJX_UPLOAD_ANALYSIS_DONE',
    data: data,
    api_dur: api_dur
})

export const ktjx_upload_files_err = (err) => ({
    type: 'KTJX_UPLOAD_FILES_ERR',
    err: err
})

// socket
export const ktjx_update_socket = (socket_pack) => ({
    type: 'KTJX_UPDATE_SOCKET',
    socket_pack: socket_pack
})

// kt_jx
export const kt_jx_upload_question_ing = (question) => ({
    type: 'KT_JX_UPLOAD_QUESTION_ING',
    question: question
})

export const kt_jx_upload_question_done = (data) => ({
    type: 'KT_JX_UPLOAD_QUESTION_DONE',
    data: data
})

export const kt_jx_upload_question_err = (err) => ({
    type: 'KT_JX_UPLOAD_QUESTION_ERR',
    err: err
})

export const kt_jx_reset_question = () => ({
    type: 'KT_JX_RESET_QUESTION'
})

// kt_yc
export const kt_yc_upload_question_ing = (question) => ({
    type: 'KT_YC_UPLOAD_QUESTION_ING',
    question: question
})

export const kt_yc_upload_question_done = (data) => ({
    type: 'KT_YC_UPLOAD_QUESTION_DONE',
    data: data
})

export const kt_yc_upload_question_err = (err) => ({
    type: 'KT_YC_UPLOAD_QUESTION_ERR',
    err: err
})

export const kt_yc_reset_question = () => ({
    type: 'KT_YC_RESET_QUESTION'
})