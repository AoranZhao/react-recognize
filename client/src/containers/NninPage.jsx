'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Axios } from '../utils';

class NninPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Nnin Page</p>
    }
}

export default connect()(NninPage);