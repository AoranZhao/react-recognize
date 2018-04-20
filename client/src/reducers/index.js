'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import recognize from './recognize';
import socket from './socket';
import nnin from './nnin';
import formulaocr from './formulaocr';
import autosolve from './autosolve';
import ktjx from './ktjx';
import ktyc from './ktyc';

const AppReducers = combineReducers({
    auth,
    users,
    recognize,
    socket,
    nnin,
    formulaocr,
    autosolve,
    ktjx,
    ktyc
})

export default AppReducers;