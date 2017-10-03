'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import recognize from './recognize';
import socket from './socket';

const AppReducers = combineReducers({
    auth,
    users,
    recognize,
    socket
})

export default AppReducers;