'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { } from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class CareerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return <div>
            <p>Career Page</p>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);