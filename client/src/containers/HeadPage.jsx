'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import OfficialPageFrame from './OfficialPageFrame.jsx';

import { } from '../actions';

import './HeadPage.scss';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class HeadPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionTech = this.sectionTech.bind(this);
        this.sectionSolution = this.sectionSolution.bind(this);
        this.sectionAbout = this.sectionAbout.bind(this);

        this.sectionOneMobile = this.sectionOneMobile.bind(this);
        this.sectionTwoMobile = this.sectionTwoMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionTech() {
        return <div className="sectionTech" key="tech">
            <div className="title">
                <span></span>
                <h3>Same world. Different levels of AI technology</h3>
                <span></span>
            </div>
            <div className="description">
                <p>Learnable has developed a constellation of technologies - from task learning to natural language processing - that allows AI engine to sense, comprehend, act, and learn.</p>
            </div>
            <div className="images">

            </div>
        </div>
    }

    sectionSolution() {
        return <div className="sectionSolu" key="solu">
            <div className="title">
                <span></span>
                <h3>Personalized solutions at your service</h3>
                <span></span>
            </div>
            <div className="description">
                <p>Learnable, Inc. is fueling the movement to empower the user of AI Technology for our generation. We provide piercing, practical, and personalized solutions depending on your demand.</p>
            </div>
            <div className="images">

            </div>
        </div>
    }

    sectionAbout() {
        return <div className="sectionAbout" key="about">
            <div className="title">
                <span></span>
                <h3>About us</h3>
                <span></span>
            </div>
            <div className="description">
                <p>Like a tech pro. Unlike any other tech pro.</p>
            </div>
            <div className="images">

            </div>
        </div>
    }


    sectionOneMobile() {
        return <div className="sectionFlyMobile">
            <p>Section One for mobile</p>
        </div>
    }

    sectionTwoMobile() {
        return <div className="sectionTwoMobile">
            <p>Section Two for mobile</p>
        </div>
    }

    render() {
        return <OfficialPageFrame browserChildren={[this.sectionTech(), this.sectionSolution(), this.sectionAbout()]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadPage);