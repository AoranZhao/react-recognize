'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import ImageItemMobile from '../ImageItemMobile.jsx';

import ScannerImage from '../../static/images/scanner_large.png';
import HandImage from '../../static/images/hand_large.png';
import ClassroomImage from '../../static/images/classroom_large.png';

import './EducationMobileSection.scss';

class EducationMobileSection extends React.Component {
    constructor(props) {
        super(props)

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionEdu = this.sectionEdu.bind(this);

        this.state = {
            showIndex: -1
        }
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

        this.updateDetailIndex = this.updateDetailIndex.bind(this);
    }

    updateDetailIndex(index) {
        if (this.state.showIndex == index) {
            this.setState({ showIndex: -1 });
        } else {
            this.setState({ showIndex: index });
        }
    }

    sectionEdu() {
        return <div className="sectionMobileEdu">
            <div className="title">
                <span></span>
                <h3>{this.title}</h3>
                <span></span>
            </div>
            <div className="description">
                <p>{this.description}</p>
            </div>
            <div className="imagesMobileSmall">
                <ImageItemMobile src={ScannerImage} style={{ width: '100%' }} title={this.details[0].title} description={this.details[0].description}
                    showDetail={this.state.showIndex == 0} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                <ImageItemMobile src={HandImage} style={{ width: '100%' }} title={this.details[1].title} description={this.details[1].description}
                    showDetail={this.state.showIndex == 1} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                <ImageItemMobile src={ClassroomImage} style={{ width: '100%' }} title={this.details[2].title} description={this.details[2].description}
                    showDetail={this.state.showIndex == 2} onClick={e => {
                        this.updateDetailIndex(2);
                    }} />
            </div>
            <div className="imagesMobileLarge">
                <div className="imagesLarge">
                    <ImageItem src={ScannerImage} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(0);
                    }} />
                    <ImageItem src={HandImage} style={{ width: '33%' }} onClick={e => {
                        this.updateDetailIndex(1);
                    }} />
                    <ImageItem src={ClassroomImage} style={{ width: '33%' }} onClick={e => {
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
        return this.sectionEdu();
    }
}

export default EducationMobileSection;