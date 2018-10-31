'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import ScannerImage from '../../static/images/scanner_large.png';
import HandImage from '../../static/images/hand_large.png';
import ClassroomImage from '../../static/images/classroom_large.png';
import './EducationSection.scss';

class EducationSection extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
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
        return <div className="sectionEdu">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="images">
                <ImageItem src={ScannerImage} style={{ width: '33%' }} title={this.details[0].title} description={this.details[0].description} />
                <ImageItem src={HandImage} style={{ width: '33%' }} title={this.details[1].title} description={this.details[1].description} />
                <ImageItem src={ClassroomImage} style={{ width: '33%' }} title={this.details[2].title} description={this.details[2].description} />
            </div>
        </div>
    }

    render() {
        return this.sectionEdu();
    }
}

export default EducationSection;