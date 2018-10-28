'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from './OfficialPageReverseFrame.jsx';

import TechnologySection from './TechnologySection.jsx';

import { } from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class TechnologyPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionOne = this.sectionOne.bind(this);
    }

    componentWillMount() {

    }

    sectionOne() {
        return <div key="one">
            <p>Technology Page</p>
        </div>
    }

    render() {
        let description = "Self-developed AI engines bridge the gap between industry and academia.";
        return <OfficialPageReverseFrame title="Technology" description={description} highlightTitle="Technology" browserChildren={[<TechnologySection key="tech" />]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyPage);