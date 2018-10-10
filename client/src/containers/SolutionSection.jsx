'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import NewYorkerImage from '../static/images/newYorker.jpg';
import './SolutionSection.scss';

class SolutionSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionSolu = this.sectionSolu.bind(this);
    }

    sectionSolu() {
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
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="Education" />
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="New Retail" />
                <ImageItem src={NewYorkerImage} style={{ width: '33%', height: '300px', display: 'inline-block', verticalAlign: 'top' }} text="Other" />
            </div>
        </div>
    }

    render() {
        return this.sectionSolu();
    }
}

export default SolutionSection;