'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';

const AppReducers = combineReducers({
    auth,
    users
})

export default AppReducers;