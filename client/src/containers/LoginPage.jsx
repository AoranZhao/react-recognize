'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Axios } from '../utils';
import { login_ing, login_done, login_err } from '../actions';
import LoginForm from '../components/LoginForm.jsx';

let LoginPage = ({dispatch, history}) => {

    let onSubmit = (email, password) => {
        dispatch(login_ing());
        Axios.post('/api/signin', {email: email, password: password})
            .then(response => {
                dispatch(login_done(response));
                history.push('/');
            })
            .catch(error => {
                dispatch(login_err(error))
            })
    }

    return <div>
        <LoginForm onSubmit={onSubmit} />
    </div>
}

LoginPage = withRouter(connect()(LoginPage));

export default LoginPage;