"use strict";

import React from 'react';

import VideoDetailItem from '../VideoDetailItem.jsx';

import "./ClassroomDetailSection.scss";

class ClassroomDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionClassroom = this.sectionClassroom.bind(this);
        this.generateClassroom = this.generateClassroom.bind(this);

        this.data = [{
            src: "video/classroom.mp4",
            title: "Classroom Video Analysis AI",
            subTitle: "A classroom doctor, not monitor",
            description: "Classroom Video Analysis AI can recognize and analyze valuable attributes and activities of teachers and students. It generates domain specific reports for evaluating well-being of the classrooms."
        }]
    }

    generateClassroom() {
        return <div className="videoDetailChildren">
            <p>Use Cases:</p>
            <p>&#9733; Record and report classroom behaviors for assessment references</p>
            <p>&#9733; Analyze and infer teaching and learning styles</p>
            <p>&#9733; Organize the large amount video data in a structuralized and portable way</p>
            <p>&#9733; Enable effective educational data mining</p>
        </div>
    }

    sectionClassroom() {
        return <div className="sectionClassroom">
            <VideoDetailItem src={this.data[0].src} title={this.data[0].title} subTitle={this.data[0].subTitle} description={this.data[0].description}>
                {this.generateClassroom()}
            </VideoDetailItem>
        </div>
    }

    render() {
        return this.sectionClassroom();
    }
}

export default ClassroomDetailSection;