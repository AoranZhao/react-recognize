'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import ImageItemMobile from '../ImageItemMobile.jsx';

import LightBulbImage from '../../static/images/lightbulb.png';
import NewRetailImage from '../../static/images/newRetail_large.png';
import BrainImage from '../../static/images/brain_large.png';

import './ProductMobileSection.scss';

class ProductMobileSection extends React.Component {
    constructor(props) {
        super(props)

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionPro = this.sectionPro.bind(this);

        this.state = {
            showIndex: -1
        }
        // this.details = [{
        //     title: "Education",
        //     description: "With AI technologies, Learnable launches educational Personalized products and analytics. The products, including AI Educational Accessories (ECR and KIE), Personalized Educational Products (Auto-grading AI and Personalized Intelligence (PI) Tutor), Classroom Video Analytics, optimize the learning and teaching behaviors and realize personalized education experience."
        // }, {
        //     title: "New-Retail",
        //     description: "For New Retail, Learnable launches Personalized policies and analytics. The products, including Personalized Marketing and Pricing Policies and Shopping Mall Video Analytics, build individual customer profile and realize personalized marketing, pricing and retailing policy."
        // }, {
        //     title: "Other",
        //     description: "Learnable makes impacts beyond Education and New Retail. Including Duckie Town and TCM (Traditional Chinese Medicine) Robot, the products promise an AI future that can be operated, taught and trusted."
        // }]

        this.details = [{
            title: "Education",
            description: "AI empowers streamlined teaching & personalized Learning. \nStar Products: Automatic Grading AI, Educational Content Recognition."
        }, {
            title: "New Retail",
            description: "AI unlocks Offline-to-Online solutions. \nStar Products: Intention Recognition, Personalized Recommendation."
        }, {
            title: "Other",
            description: "AI promises a better future for many industries. \nStar Products: Duckietown AI course, TCM Robot."
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

    sectionPro() {
        return <div className="sectionMobilePro">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="imagesMobileSmall">
                <ImageItemMobile src={LightBulbImage} style={{ width: '100%' }} title={this.details[0].title} description={this.details[0].description}
                    showDetail={this.state.showIndex == 0} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                <ImageItemMobile src={NewRetailImage} style={{ width: '100%' }} title={this.details[1].title} description={this.details[1].description}
                    showDetail={this.state.showIndex == 1} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                <ImageItemMobile src={BrainImage} style={{ width: '100%' }} title={this.details[2].title} description={this.details[2].description}
                    showDetail={this.state.showIndex == 2} onClick={e => {
                        this.updateDetailIndex(2);
                    }} />
            </div>
            <div className="imagesMobileLarge">
                <div className="imagesLarge">
                    <ImageItem src={LightBulbImage} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                    <ImageItem src={NewRetailImage} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                    <ImageItem src={BrainImage} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(2);
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
        return this.sectionPro();
    }
}

export default ProductMobileSection;