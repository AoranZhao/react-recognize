'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import recognize from './recognize';
import socket from './socket';
import nnin from './nnin';
import formulaocr from './formulaocr';
import autosolve from './autosolve';

const AppReducers = combineReducers({
    auth,
    users,
    recognize,
    socket,
    nnin,
    formulaocr,
    autosolve
})

export default AppReducers;