'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import QrcodeImage from '../../static/images/qr_code.png';
import MallImage from '../../static/images/mall.png';

import './NewretailSection.scss';

class NewretailSection extends React.Component {
    constructor() {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionNewretail = this.sectionNewretail.bind(this);

        this.details = [{
            title: "Personalized Marketing and Pricing Policies",
            description: "Personalized Ad Pushes pushes personalized coupon/advertising to consumers who scan the code. It converts users to paid users, increases user traffic, and increases the repurchase rate. Delay Prediction and Pricing Policy predicts the “possibility” of flight or delivery delay, with the model become stronger model and predictions become better overtime. The policy helps pricing policy optimization and maximization in sales and repurchase rate."
        }, {
            title: "Shopping Mall Video Analytics",
            description: "Shopping mall Video Analytics can recognize customer behaviors. With the recognition of customer behaviors, it predicts the intentions of each individual With Shopping Mall Analytics, human labor in monitoring the mall can be replaced. It generates global management policies for leading retailer groups."
        }]
    }

    sectionNewretail() {
        return <div className="sectionRetail">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="images">
                <ImageItem src={QrcodeImage} style={{ width: '50%' }} title={this.details[0].title} description={this.details[0].description} />
                <ImageItem src={MallImage} style={{ width: '50%' }} title={this.details[1].title} description={this.details[1].description} />
            </div>
        </div>
    }

    render() {
        return this.sectionNewretail();
    }
}

export default NewretailSection;