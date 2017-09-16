'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import recognize from './recognize';

const AppReducers = combineReducers({
    auth,
    users,
    recognize
})

export default AppReducers;