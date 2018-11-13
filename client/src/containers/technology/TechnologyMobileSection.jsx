'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import ImageItemMobile from '../ImageItemMobile.jsx';

import DRLGif from '../../static/images/DRL.gif';
import DroneGif from '../../static/images/Drone.gif';
import ExplainGif from '../../static/images/Explain.gif';

import './TechnologyMobileSection.scss';

class TechnologyMobileSection extends React.Component {
    constructor(props) {
        super(props)

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionTech = this.sectionTech.bind(this);

        this.state = {
            showIndex: -1
        }
        // this.details = [{
        //     title: "Deep Reinforcement Learning AI",
        //     description: "Deep Reinforcement Learning AI can learn complicated tasks through self-training. It helps to achieve global optimal policy at multi-level strategy. It supports multi-agent, multi-reward, partially observable task."
        // }, {
        //     title: "Explainable AI Engine",
        //     description: "Explainable AI Engine lets AI explain its own decision and the reason for its decision. It allows human to train AI through explanations. It is more reliable compared to general “blackbox” AI."
        // }, {
        //     title: "Teachable AI Engine",
        //     description: "Teachable AI Engine allows the general lay population to quickly and easily teach an AI with natural language to learn to do any task. It supports multiple human-computer interaction, i.e., reward and feedback, voice control, end-user programming, etc."
        // }]
        this.details = [{
            title: "Deep Reinforcement Learning",
            description: "Learn complicated tasks through self-training.",
        }, {
            title: "eXplainable AI Engine",
            description: "Open up the black-box of deep learning."
        }, {
            title: "Teachable AI Engine",
            description: "Teach AI through natural language feedback."
        }]

        this.updateDetailIndex = this.updateDetailIndex.bind(this);
    }

    updateDetailIndex(index) {
        if (this.state.showIndex == index) {
            this.setState({ showIndex: -1 });
        } else {
            this.setState({ showIndex: index });
        }
    }

    sectionTech() {
        return <div className="sectionMobileTech">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="imagesMobileSmall">
                <ImageItemMobile src={DRLGif} style={{ width: '100%' }} title={this.details[0].title} description={this.details[0].description}
                    showDetail={this.state.showIndex == 0} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                <ImageItemMobile src={DroneGif} style={{ width: '100%' }} title={this.details[1].title} description={this.details[1].description}
                    showDetail={this.state.showIndex == 1} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                <ImageItemMobile src={ExplainGif} style={{ width: '100%' }} title={this.details[2].title} description={this.details[2].description}
                    showDetail={this.state.showIndex == 2} onClick={e => {
                        this.updateDetailIndex(2);
                    }} />
            </div>
            <div className="imagesMobileLarge">
                <div className="imagesLarge">
                    <ImageItem src={DRLGif} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                    <ImageItem src={DroneGif} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                    <ImageItem src={ExplainGif} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(2);
                    }} />
                </div>
                {
                    (typeof this.state.showIndex != 'undefined' && this.state.showIndex >= 0) ?
                        <div className="imagesDetail">
                            <p style={{ fontWeight: 'blod' }}>{this.details[this.state.showIndex].title}</p>
                            <p>{this.details[this.state.showIndex].description}</p>
                        </div> : <div></div>
                }

            </div>
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologyMobileSection;