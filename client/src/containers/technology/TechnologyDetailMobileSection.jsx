'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import ImageDetailItemMobile from '../ImageDetailItemMobile.jsx';

import DRLGif from '../../static/images/DRL.gif';
import DroneGif from '../../static/images/Drone.gif';
import ExplainGif from '../../static/images/Explain.gif';
import './TechnologyDetailSection.scss';

class TechnologyDetailMobileSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionTech = this.sectionTech.bind(this);

        this.details = [{
            title: "Deep Reinforcement Learning",
            description: "Deep Reinforcement Learning can learn complicated tasks through self-training. It can achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable tasks."
        }, {
            title: "eXplainable AI Engine",
            description: "Explainable AI Engine can explain the reason for its decision. It is more reliable compared to general “blackbox” AI and is more suitable for industry applications."
        }, {
            title: "Teachable AI Engine",
            description: "Teachable AI Engine can learn to do any task through natural language feedback from the general lay population. It supports multiple human-computer interactions, i.e., reward and feedback, voice control, end-user programming, etc."
        }]
    }

    sectionTech() {
        return <div className="technologyDetailMobileSection">
            <ImageDetailItemMobile src={DRLGif} title={this.details[0].title} description={this.details[0].description} />
            <ImageDetailItemMobile src={ExplainGif} title={this.details[1].title} description={this.details[1].description} />
            <ImageDetailItemMobile src={DroneGif} title={this.details[2].title} description={this.details[2].description} />
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologyDetailMobileSection;

