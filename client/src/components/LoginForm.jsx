'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
    onSubmit
}) => {
    let ref_email, ref_password;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if(!ref_email.value.trim() || !ref_password.value.trim())
                    return;
                onSubmit(ref_email.value.trim(), ref_password.value.trim());
            }}>
            <input type="text" placeholder="User ID" name="email" ref={node => ref_email = node} />
            <input type="password" placeholder="Password" name="password" ref={node => ref_password = node} />
            <input type="submit" value="Login" />
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm;