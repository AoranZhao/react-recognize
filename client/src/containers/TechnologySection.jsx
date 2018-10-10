'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import NewYorkerImage from '../static/images/newYorker.jpg';
import './TechnologySection.scss';

class TechnologySection extends React.Component {
    constructor(props) {
        super(props)

        this.sectionTech = this.sectionTech.bind(this);
    }

    sectionTech() {
        return <div className="sectionTech">
            <div className="title">
                <span></span>
                <h3>Same world. Different levels of AI technology</h3>
                <span></span>
            </div>
            <div className="description">
                <p>Learnable has developed a constellation of technologies - from task learning to natural language processing - that allows AI engine to sense, comprehend, act, and learn.</p>
            </div>
            <div className="images">
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="Teachable Artificial Intelligence Engine" />
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="Explainable Artificial Intelligence Engine" />
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="Deep Reinforce Learning" />
            </div>
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologySection;