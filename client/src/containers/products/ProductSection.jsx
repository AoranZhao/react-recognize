'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import LightBulbImage from '../../static/images/lightbulb.png';
import NewRetailImage from '../../static/images/newRetail_large.png';
import BrainImage from '../../static/images/brain_large.png';
import './ProductSection.scss';

class ProductSection extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionPro = this.sectionPro.bind(this);

        this.details = [{
            title: "Education",
            description: "AI empowers streamlined teaching & personalized Learning. \nStar Products: Automatic Grading AI, Educational Content Recognition.",
            textTo: "/education"
        }, {
            title: "New Retail",
            description: "AI unlocks Offline-to-Online solutions. \nStar Products: Intention Recognition, Personalized Recommendation.",
            textTo: "/newretail"
        }, {
            title: "Other",
            description: "AI promises a better future for many industries. \nStar Products: Duckietown AI course, TCM Robot.",
            textTo: "#"
        }]
    }

    sectionPro() {
        return <div className="sectionPro">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="images">
                <ImageItem src={LightBulbImage} style={{ width: '33%' }} title={this.details[0].title} description={this.details[0].description} textTo={this.details[0].textTo} />
                <ImageItem src={NewRetailImage} style={{ width: '33%' }} title={this.details[1].title} description={this.details[1].description} textTo={this.details[1].textTo} />
                <ImageItem src={BrainImage} style={{ width: '33%' }} title={this.details[2].title} description={this.details[2].description} textTo={this.details[2].textTo} />
            </div>
        </div>
    }

    render() {
        return this.sectionPro();
    }
}

export default ProductSection;