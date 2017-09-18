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

export const upload_files_done = (response) => ({
    type: 'UPLOAD_FILES_DONE',
    response: response
})

export const upload_files_err = (err) => ({
    type: 'UPLOAD_FILES_ERR',
    err: err
})