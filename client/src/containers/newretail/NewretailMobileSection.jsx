'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import ImageItemMobile from '../ImageItemMobile.jsx';

import QrcodeImage from '../../static/images/qr_code.png';
import MallImage from '../../static/images/mall.png';

import './NewretailMobileSection.scss';

class NewretailMobileSection extends React.Component {
    constructor(props) {
        super(props)

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionNewretail = this.sectionNewretail.bind(this);

        this.state = {
            showIndex: -1
        }
        this.details = [{
            title: "Personalized Marketing and Pricing Policies",
            description: "Personalized Ad Pushes pushes personalized coupon/advertising to consumers who scan the code. It converts users to paid users, increases user traffic, and increases the repurchase rate. Delay Prediction and Pricing Policy predicts the “possibility” of flight or delivery delay, with the model become stronger model and predictions become better overtime. The policy helps pricing policy optimization and maximization in sales and repurchase rate."
        }, {
            title: "Shopping Mall Video Analytics",
            description: "Shopping mall Video Analytics can recognize customer behaviors. With the recognition of customer behaviors, it predicts the intentions of each individual With Shopping Mall Analytics, human labor in monitoring the mall can be replaced. It generates global management policies for leading retailer groups."
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

    sectionNewretail() {
        return <div className="sectionMobileRetail">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="imagesMobileSmall">
                <ImageItemMobile src={QrcodeImage} style={{ width: '100%' }} title={this.details[0].title} description={this.details[0].description}
                    showDetail={this.state.showIndex == 0} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                <ImageItemMobile src={MallImage} style={{ width: '100%' }} title={this.details[1].title} description={this.details[1].description}
                    showDetail={this.state.showIndex == 1} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
            </div>
            <div className="imagesMobileLarge">
                <div className="imagesLarge">
                    <ImageItem src={QrcodeImage} style={{ width: '50%' }} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                    <ImageItem src={MallImage} style={{ width: '50%' }} onClick={e => {
                        this.updateDetailIndex(1);
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
        return this.sectionNewretail();
    }
}

export default NewretailMobileSection;