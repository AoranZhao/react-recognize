'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import ImageDetailItemMobile from '../ImageDetailItemMobile.jsx';

import QrcodeImage from '../../static/images/qr_code.png';
import MallImage from '../../static/images/mall_large.png';
import './NewretailDetailMobileSection.scss';

class NewretailDetailMobileSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionRetail = this.sectionRetail.bind(this);

        this.details = [{
            title: "Personalized Marketing and Pricing Policies",
            description: "Learnable believes in the value of personalization in new retail. Our personalized marketing engine pushes the right content to the right end user. Since launched, we have helped businesses increase user traffic, conversion and repurchase rate. \nBuild personalization for your company. Details coming soon."
        }, {
            title: "Retail Store Video Analytics",
            description: "Learnable cracks a way to retrieve valuable information from offline scenarios. Our video analytics solution goes beyond customer detection and crowd analysis. With video data, it builds customer profile, recognizes customer activities and predicts customer intentions. \nAdd intelligence to your store monitor. Details coming soon."
        }]
    }

    sectionRetail() {
        return <div className="newretailDetailMobileSection">
            <ImageDetailItemMobile src={QrcodeImage} title={this.details[0].title} description={this.details[0].description} />
            <ImageDetailItemMobile src={MallImage} title={this.details[1].title} description={this.details[1].description} />
        </div>
    }

    render() {
        return this.sectionRetail();
    }
}

export default NewretailDetailMobileSection;

