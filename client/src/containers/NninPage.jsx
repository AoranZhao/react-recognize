'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Axios } from '../utils';

class NninPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('rendering');
        return <p>Nnin Page</p>
    }
}

export default NninPage;