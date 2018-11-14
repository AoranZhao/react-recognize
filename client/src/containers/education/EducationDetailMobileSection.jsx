'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import ImageDetailItemMobile from '../ImageDetailItemMobile.jsx';

import ScannerImage from '../../static/images/scanner_large.png';
import HandImage from '../../static/images/hand_large.png';
import ClassroomImage from '../../static/images/classroom_large.png';
import './EducationDetailMobileSection.scss';

class EducationDetailMobileSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionEdu = this.sectionEdu.bind(this);

        this.details = [{
            title: "AI Educational Accessories",
            description: "Learnable’s AI-powered tool kit can streamline and upgrade many components in the education pipeline. It automatically digitalizes, structuralizes and analyzes your educational materials with incredible speed and accuracy. \nNo more repetitive labor work. Get down to the real essentials of education. Click for more information.",
            textTo: "/aieducationalaccessories"
        }, {
            title: "Personalized Educational Products",
            description: "Learnable’s intelligent educational engine is the private tutor for students, grading assistant for teachers, and performance tracker for parents. Our cutting-edge research has enabled mistake detection and analysis for homework and test papers, even including math questions that require step-by-step solutions and proofs. \nA glimpse of the future with ultimately personalized education. Click for more information."
        }, {
            title: "Classroom Cognitive Analysis",
            description: "Learnable’s Classroom Cognitive Analysis solution can assess classroom teaching and learning behaviors. It is an effective tool for teacher training, key indicator for teacher evaluation and meaningful reflection for education policy implementation. \nIntelligent classroom seamlessly integrated with video analytics. Click for more information.",
            textTo: "/classroom"
        }]
    }

    sectionEdu() {
        return <div className="educationDetailMobileSection">
            <ImageDetailItemMobile src={ScannerImage} title={this.details[0].title} description={this.details[0].description} textTo={this.details[0].textTo} />
            <ImageDetailItemMobile src={HandImage} title={this.details[1].title} description={this.details[1].description} />
            <ImageDetailItemMobile src={ClassroomImage} title={this.details[2].title} description={this.details[2].description} textTo={this.details[2].textTo} />
        </div>
    }

    render() {
        return this.sectionEdu();
    }
}

export default EducationDetailMobileSection;

