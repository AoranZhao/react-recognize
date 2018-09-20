'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { } from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class HeadPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return <div>
            <p>Head Page</p>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadPage);