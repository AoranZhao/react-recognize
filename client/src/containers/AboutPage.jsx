'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from './OfficialPageReverseFrame.jsx';
import AboutSection from './AboutSection.jsx';

import { } from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionOne = this.sectionOne.bind(this);
    }

    componentWillMount() {

    }

    sectionOne() {
        return <div key="one">
            <p>About Page</p>
        </div>
    }

    render() {
        let description = "company description";
        return <OfficialPageReverseFrame title="Company" highlightTitle="About" browserChildren={[<AboutSection key="about" />]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);