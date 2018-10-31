'use strict';

import React from 'react';

import ImageItem from './ImageItem.jsx';
import HandImage from '../static/images/hand_large.png';
import LightBulbImage from '../static/images/lightbulb.png';
import NewRetailImage from '../static/images/newRetail_large.png';
import BrainImage from '../static/images/brain_large.png';
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
                <h3>Products</h3>
                <span></span>
            </div>
            <div className="description">
                <p>Our products and services have demonstrated their huge potentials and impressive values in many traditional industries, including education, new-retail, etc.</p>
            </div>
            <div className="images">
                <ImageItem src={LightBulbImage} style={{ width: '33%' }} title="Education" description="With AI technologies, Learnable launches educational Personalized products and analytics. The products, including AI Educational Accessories (ECR and KIE), Personalized Educational Products (Auto-grading AI and Personalized Intelligence (PI) Tutor), Classroom Video Analytics, optimize the learning and teaching behaviors and realize personalized education experience." />
                <ImageItem src={NewRetailImage} style={{ width: '33%' }} title="New-Retail" description="For New Retail, Learnable launches Personalized policies and analytics. The products, including Personalized Marketing and Pricing Policies and Shopping Mall Video Analytics, build individual customer profile and realize personalized marketing, pricing and retailing policy." />
                <ImageItem src={BrainImage} style={{ width: '33%' }} title="Other" description="Learnable makes impacts beyond Education and New Retail. Including Duckie Town and TCM (Traditional Chinese Medicine) Robot, the products promise an AI future that can be operated, taught and trusted." />
            </div>
        </div>
    }

    render() {
        return this.sectionSolu();
    }
}

export default SolutionSection;