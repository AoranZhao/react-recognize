"use strict";

import React from "react";

import VideoDetailItem from '../VideoDetailItem.jsx';

import "./AIEduAccDetailSection.scss";

class AIEduAccDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionAIEduAcc = this.sectionAIEduAcc.bind(this);
        this.generateECR = this.generateECR.bind(this);
        this.generateKIE = this.generateKIE.bind(this);

        this.data = [{
            src: "video/ECR.mp4",
            title: "Educational Optical Content Recognition (ECR)",
            subTitle: "Digitalize books and papers in seconds",
            description: "Educational Content Recognition(ECR) converts printed and handwritten contents into digital, editable formats. ECR enables your online and offline education institutions to establish and expand question bases with incredible efficiency and accuracy."
        }, {
            src: "video/KIE.mp4",
            title: "Knowledge Interpretation Engine (KIE)",
            subTitle: "Interpret questions and problem sets in depth",
            description: "Knowledge Interpretation Engine (KIE) “understands” the content and automatically mark the knowledge points and meanings by matching it with the knowledge graph. KIE gives intelligence to your question base and a potential to thrive in the online education era."
        }]
    }

    generateECR() {
        return <div className="videoDetailChildren">
            <p>Features: </p>
            <p>&#9733; Support whole-page recognition, automatically achieve segmentation of titles, columns, page numbers, icons, and forms</p>
            <p>&#9733; Support the mix of print/handwritten content recognition</p>
            <p>&#9733; Support Chinese/English/formula mixed content recognition</p>
            <p>&#9733; Support recognition, understanding and deduction of geometric shapes and diagrams</p>
            <p>&#9733; Provide swift, robust, compatible, and easy-to-apply application interface</p>
            <p>&#9733; Provide customized interface based on user-specific needs</p>
        </div>
    }

    generateKIE() {
        return <div className="videoDetailChildren">
            <p>Steps:</p>
            <p>Tag</p>
            <p>Label questions with knowledge points, level of difficulties and relevant solution methods, under the framework of your existing knowledge tree.</p>
            <p>Solve</p>
            <p>Generate step-by-step solutions for multiple types of questions in all viable methods, coupled with customized explanations.</p>
            <p>Manage</p>
            <p>Analyze the characteristics of your existing question bank or new question groups input; help establish your automatic question/course recommendation system.</p>
        </div>
    }

    sectionAIEduAcc() {
        return <div className="sectionAIEduAcc">
            <VideoDetailItem src={this.data[0].src} title={this.data[0].title} subTitle={this.data[0].subTitle} description={this.data[0].description}>
                {this.generateECR()}
            </VideoDetailItem>
            <VideoDetailItem src={this.data[1].src} title={this.data[1].title} subTitle={this.data[1].subTitle} description={this.data[1].description}>
                {this.generateKIE()}
            </VideoDetailItem>
        </div>
    }

    render() {
        return this.sectionAIEduAcc();
    }
}

export default AIEduAccDetailSection;