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
            description: "With AI technologies, Learnable launches educational Personalized products and analytics. The products, including AI Educational Accessories (ECR and KIE), Personalized Educational Products (Auto-grading AI and Personalized Intelligence (PI) Tutor), Classroom Video Analytics, optimize the learning and teaching behaviors and realize personalized education experience."
        }, {
            title: "New-Retail",
            description: "For New Retail, Learnable launches Personalized policies and analytics. The products, including Personalized Marketing and Pricing Policies and Shopping Mall Video Analytics, build individual customer profile and realize personalized marketing, pricing and retailing policy."
        }, {
            title: "Other",
            description: "Learnable makes impacts beyond Education and New Retail. Including Duckie Town and TCM (Traditional Chinese Medicine) Robot, the products promise an AI future that can be operated, taught and trusted."
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
                <ImageItem src={LightBulbImage} style={{ width: '33%' }} title={this.details[0].title} description={this.details[0].description} />
                <ImageItem src={NewRetailImage} style={{ width: '33%' }} title={this.details[1].title} description={this.details[1].description} />
                <ImageItem src={BrainImage} style={{ width: '33%' }} title={this.details[2].title} description={this.details[2].description} />
            </div>
        </div>
    }

    render() {
        return this.sectionPro();
    }
}

export default ProductSection;