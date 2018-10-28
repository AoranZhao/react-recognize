'use strict';

import React from 'react';
import { connect } from 'react-redux';

import RequestDemoSection from './RequestDemoSection.jsx';

import { } from '../actions';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

class RequestDemoPage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {
        return <div></div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDemoPage);