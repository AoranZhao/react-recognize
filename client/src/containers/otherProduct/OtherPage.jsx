"use strict";

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class OtherPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "This page is coming soon";
        return <OfficialPageReverseFrame title="Other" description={description} highlightTitle="Product" browserChildren={[]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage);