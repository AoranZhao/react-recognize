'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import recognize from './recognize';
import socket from './socket';
import nnin from './nnin';

const AppReducers = combineReducers({
    auth,
    users,
    recognize,
    socket,
    nnin
})

export default AppReducers;