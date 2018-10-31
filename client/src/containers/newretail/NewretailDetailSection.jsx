'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import QrcodeImage from '../../static/images/qr_code.png';
import MallImage from '../../static/images/mall_large.png';
import './NewretailDetailSection.scss';

class NewretailDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionRetail = this.sectionRetail.bind(this);

        this.details = [{
            title: "Personalized Marketing and Pricing Policies",
            description: "Personalized Ad Pushes pushes personalized coupon/advertising to consumers who scan the code. It converts users to paid users, increases user traffic, and increases the repurchase rate. Delay Prediction and Pricing Policy predicts the “possibility” of flight or delivery delay, with the model become stronger model and predictions become better overtime. The policy helps pricing policy optimization and maximization in sales and repurchase rate."
        }, {
            title: "Shopping Mall Video Analytics",
            description: "Shopping mall Video Analytics can recognize customer behaviors. With the recognition of customer behaviors, it predicts the intentions of each individual With Shopping Mall Analytics, human labor in monitoring the mall can be replaced. It generates global management policies for leading retailer groups."
        }]
    }

    sectionRetail() {
        return <div className="newretailDetailSection">
            <ImageDetailItem src={QrcodeImage} title={this.details[0].title} description={this.details[0].description} />
            <ImageDetailItem src={MallImage} title={this.details[1].title} description={this.details[1].description} />
        </div>
    }

    render() {
        return this.sectionRetail();
    }
}

export default NewretailDetailSection;

