'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import DRLGif from '../static/images/DRL.gif';
import DroneGif from '../static/images/Drone.gif';
import ExplainGif from '../static/images/Explain.gif';
import './TechnologySection.scss';

class TechnologySection extends React.Component {
    constructor(props) {
        super(props)

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionTech = this.sectionTech.bind(this);
    }

    sectionTech() {
        return <div className="sectionTech">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="images">
                <ImageItem src={DRLGif} style={{ width: '33%' }} title="Deep Reinforcement Learning AI" description="Deep Reinforcement Learning AI can learn complicated tasks through self-training. It helps to achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable task." />
                <ImageItem src={ExplainGif} style={{ width: '33%' }} title="Explainable AI Engine" description="Explainable AI Engine lets AI explain its own decision and the reason for its decision. It allows human to train AI through explanations. It is more reliable compared to general “blackbox” AI." />
                <ImageItem src={DroneGif} style={{ width: '33%' }} title="Teachable AI Engine" description="Teachable AI Engine allows the general lay population to quickly and easily teach an AI with natural language to learn to do any task. It supports multiple human-computer interaction, i.e., reward and feedback, voice control, end-user programming, etc." />
            </div>
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologySection;