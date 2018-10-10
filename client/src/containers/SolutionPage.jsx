'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageFrame from './OfficialPageFrame.jsx';
import SolutionSection from './SolutionSection.jsx';

import { } from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class SolutionPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionOne = this.sectionOne.bind(this);
    }

    componentWillMount() {

    }

    sectionOne() {
        return <div key="one">
            <p>Solution Page</p>
        </div>
    }

    render() {
        return <OfficialPageFrame browserChildren={[<SolutionSection key="solu" />]} mobileChildren={[]} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SolutionPage);