'use strict';

import React from 'react';

import ImageDetailItem from '../ImageDetailItem.jsx';
import ScannerImage from '../../static/images/scanner_large.png';
import HandImage from '../../static/images/hand_large.png';
import ClassroomImage from '../../static/images/classroom_large.png';
import './EducationDetailSection.scss';

class EducationDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionEdu = this.sectionEdu.bind(this);

        // this.details = [{
        //     title: "AI Educational Accessories",
        //     description: "Educational Optical Content Recognition (ECR) can implement textual, numeric and handwritten content identification by scanning and turn them into editable format. Knowledge Interpretation Engine (KIE) can “understand” the content and automatically mark the knowledge points and meanings by matching it with knowledge graph."
        // }, {
        //     title: "Personalized Educational Products",
        //     description: "Auto-grading AI can grade one page of homework within 10 seconds at one click. It recognizes the printed question. It tracks the student’s handwriting and automatically marks the wrong answers and the relevant steps. Personalized Intelligence (PI) Tutor can generate personalized feedback for each step of the student’s answer by interacting with student’s answer (such as rewriting the answer or putting on a question mark)."
        // }, {
        //     title: "Classroom Video Analytics",
        //     description: "Classroom Video Analytics can describe teachers’ behaviors and indicate teaching styles based on teachers’ gestures and audios. It can also evaluate learning students’ behaviors based on students’ gestures and audios. Based on the evaluations, Classroom Video Analytics measures classroom well-being."
        // }]

        this.details = [{
            title: "AI Educational Accessories",
            description: "Learnable’s AI-powered tool kit can streamline and upgrade many components in the education pipeline. It automatically digitalizes, structuralizes and analyzes your educational materials with incredible speed and accuracy. \nNo more repetitive labor work. Get down to the real essentials of education. Click for more information."
        }, {
            title: "Personalized Educational Products",
            description: "Learnable’s intelligent educational engine is the private tutor for students, grading assistant for teachers, and performance tracker for parents. Our cutting-edge research has enabled mistake detection and analysis for homework and test papers, even including math questions that require step-by-step solutions and proofs. \nA glimpse of the future with ultimately personalized education. Click for more information."
        }, {
            title: "Classroom Cognitive Analysis",
            description: "Learnable’s Classroom Cognitive Analysis solution can assess classroom teaching and learning behaviors. It is an effective tool for teacher training, key indicator for teacher evaluation and meaningful reflection for education policy implementation. \nIntelligent classroom seamlessly integrated with video analytics. Click for more information."
        }]
    }

    sectionEdu() {
        return <div className="educationDetailSection">
            <ImageDetailItem src={ScannerImage} title={this.details[0].title} description={this.details[0].description} />
            <ImageDetailItem src={HandImage} title={this.details[1].title} description={this.details[1].description} />
            <ImageDetailItem src={ClassroomImage} title={this.details[2].title} description={this.details[2].description} />
        </div>
    }

    render() {
        return this.sectionEdu();
    }
}

export default EducationDetailSection;

