'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TabEntry = ({
    to,
    text
}) => {
    return (
        <Link to={to}>{text}</Link>
    )
}

TabEntry.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    text: PropTypes.string.isRequired
}

export default TabEntry