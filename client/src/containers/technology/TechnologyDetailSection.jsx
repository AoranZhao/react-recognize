'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import DRLGif from '../../static/images/DRL.gif';
import DroneGif from '../../static/images/Drone.gif';
import ExplainGif from '../../static/images/Explain.gif';
import './TechnologyDetailSection.scss';

class TechnologyDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionTech = this.sectionTech.bind(this);

        this.details = [{
            title: "Deep Reinforcement Learning AI",
            description: "Deep Reinforcement Learning AI can learn complicated tasks through self-training. It helps to achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable task."
        }, {
            title: "Explainable AI Engine",
            description: "Explainable AI Engine lets AI explain its own decision and the reason for its decision. It allows human to train AI through explanations. It is more reliable compared to general “blackbox” AI."
        }, {
            title: "Teachable AI Engine",
            description: "Teachable AI Engine allows the general lay population to quickly and easily teach an AI with natural language to learn to do any task. It supports multiple human-computer interaction, i.e., reward and feedback, voice control, end-user programming, etc."
        }]
    }

    sectionTech() {
        return <div className="technologyDetailSection">
            <ImageDetailItem src={DRLGif} title={this.details[0].title} description={this.details[0].description} />
            <ImageDetailItem src={DroneGif} title={this.details[1].title} description={this.details[1].description} />
            <ImageDetailItem src={ExplainGif} title={this.details[2].title} description={this.details[2].description} />
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologyDetailSection;

