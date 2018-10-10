'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import NewYorkerImage from '../static/images/newYorker.jpg';
import './AboutSection.scss';

class SolutionSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionAbout = this.sectionAbout.bind(this);
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
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '25%', height: '250px', display: 'inline-block', verticalAlign: 'top' }} />
            </div>
        </div>
    }

    render() {
        return this.sectionAbout();
    }
}

export default SolutionSection;