'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import email from './email';

const AppReducers = combineReducers({
    auth,
    users,
    email
})

export default AppReducers;