'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import OfficialPageFrame from './OfficialPageFrame.jsx';
import ImageItem from './ImageItem.jsx';

import TechnologySection from './TechnologySection.jsx';
import SolutionSection from './SolutionSection.jsx';
import AboutSection from './AboutSection.jsx';

import TechnologyMobileSection from './TechnologyMobileSection.jsx';

import { } from '../actions';

import NewYorkerImage from '../static/images/newYorker.jpg';

import './HeadPage.scss';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class HeadPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionOneMobile = this.sectionOneMobile.bind(this);
        this.sectionTwoMobile = this.sectionTwoMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionOneMobile() {
        return <div className="sectionFlyMobile" key="oneMobile">
            <p>Section One for mobile</p>
        </div>
    }

    sectionTwoMobile() {
        return <div className="sectionTwoMobile" key="twoMobile">
            <p>Section Two for mobile</p>
        </div>
    }

    render() {
        return <OfficialPageFrame highlightTitle="Home" browserChildren={[<TechnologySection key="tech" />, <SolutionSection key="solu" />, <AboutSection key="about" />]} mobileChildren={[<TechnologyMobileSection key="techMobile" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadPage);