'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageFrame from './OfficialPageFrame.jsx';
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
        return <OfficialPageFrame highlightTitle="About" browserChildren={[<AboutSection key="about" />]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);