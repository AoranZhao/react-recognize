'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

let LogoutButton = ({dispatch}) => (
    <form
        onSubmit={e => {
            e.preventDefault();
            dispatch(logout());
        }}
        >
        <input type="submit" value="Logout" />
    </form>
)

LogoutButton = connect()(LogoutButton);

export default LogoutButton;