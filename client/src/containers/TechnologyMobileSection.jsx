'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import ImageItemMobile from './ImageItemMobile.jsx';
import NewYorkerImage from '../static/images/newYorker.jpg';
import './TechnologyMobileSection.scss';

class TechnologyMobileSection extends React.Component {
    constructor(props) {
        super(props)

        this.sectionTech = this.sectionTech.bind(this);
    }

    sectionTech() {
        return <div className="sectionMobileTech">
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
            <div className="imagesMobile">
                <ImageItemMobile src={NewYorkerImage} style={{ width: '100%', height: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} text="" />
                <ImageItemMobile src={NewYorkerImage} style={{ width: '100%', height: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} text="" />
                <ImageItemMobile src={NewYorkerImage} style={{ width: '100%', height: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} text="" />
            </div>
        </div>
    }

    render() {
        return this.sectionTech();
    }
}

export default TechnologyMobileSection;