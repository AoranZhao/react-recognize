'use strict';

import React from 'react';
import { connect } from 'react-redux';

import RequestDemoSection from './RequestDemoSection.jsx';
import OfficialPageReverseFrame from './OfficialPageReverseFrame.jsx';

import { } from '../actions';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

class RequestDemoPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionRequestDemo = this.sectionRequestDemo.bind(this);
    }

    componentWillMount() {

    }

    sectionRequestDemo() {
        return <RequestDemoSection />
    }

    render() {
        let description = "";
        return <OfficialPageReverseFrame title="Demo" description={description} highlightTitle="Demo" browserChildren={[this.sectionRequestDemo()]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDemoPage);