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