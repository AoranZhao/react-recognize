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

        this.details = [{
            title: "AI Educational Accessories",
            description: "Educational Optical Content Recognition (ECR) can implement textual, numeric and handwritten content identification by scanning and turn them into editable format. Knowledge Interpretation Engine (KIE) can “understand” the content and automatically mark the knowledge points and meanings by matching it with knowledge graph."
        }, {
            title: "Personalized Educational Products",
            description: "Auto-grading AI can grade one page of homework within 10 seconds at one click. It recognizes the printed question. It tracks the student’s handwriting and automatically marks the wrong answers and the relevant steps. Personalized Intelligence (PI) Tutor can generate personalized feedback for each step of the student’s answer by interacting with student’s answer (such as rewriting the answer or putting on a question mark)."
        }, {
            title: "Classroom Video Analytics",
            description: "Classroom Video Analytics can describe teachers’ behaviors and indicate teaching styles based on teachers’ gestures and audios. It can also evaluate learning students’ behaviors based on students’ gestures and audios. Based on the evaluations, Classroom Video Analytics measures classroom well-being."
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

