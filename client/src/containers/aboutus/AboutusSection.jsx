'use strict';

import React from 'react';

import ImageItem from '../ImageItem.jsx';
import BerkleeImage from '../../static/images/media/Berklee_small.png';
import CESImage from '../../static/images/media/ces_small.png';
import DavosImage from '../../static/images/media/Davos_small.png';
import MicrosoftImage from '../../static/images/media/MicrosoftBuild_small.png';
import NewYorkerImage from '../../static/images/media/NewYorker.jpg';
import TedImage from '../../static/images/media/TedXBoston_small.png';
import mileStomeImage from '../../static/images/milestone_small.png';

import './AboutusSection.scss';

class AboutusSection extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
        this.sectionAbout = this.sectionAbout.bind(this);

        this.paragraphs = [
            "Learnable is a human-centered Artificial Intelligence (AI) company originally from the Harvard Innovation Lab. Since our establishment in 2016, we have been devoted to integrating cutting-edge artificial intelligence technologies with traditional industries and existing ecosystems. Our mission is to bridge the gap between industry and academia and to make every experience truly cherished and personalized.",
            "Learnable has successfully self-developed Deep Reinforcement Learning Engine, Teachable Artificial Intelligence Engine and Explainable Artificial Intelligence Engine. With our unique engines, a series of products have been released, including Educational Optical Character Recognition AI (ECR), Knowledge Intelligence Engine (KIE), Auto-grading AI, Personalized Intelligent (PI) Tutor, Classroom Video Analysis AI, Personalized Ad Pushes, Shopping Mall Video Analytics, etc.",
            "Our products and services have demonstrated their huge potentials and impressive values in many traditional industries, including education, new-retail, medicine, and marketing. We believe that research, development, and localization are the three pillars that will help push human-centered artificial intelligence to the next level.",
            "Our team consists of Ph.D.  students from Brown University, Harvard University, MIT, Columbia University, and Carnegie Mellon University, and chief scientists, senior engineers, and directors originally from leading-industry companies. Our core members have written influential publications and won the best paper and demo awards in top venue academic conferences — e.g. NIPS, ICML, AAAI. We are currently leading cutting-edge research in our respective fields.",
            "In 2015 at Microsoft, our team released the first personalized intelligent tutoring AI (PI Tutor) ever, which has drawn huge attention. Our products and technologies have won the champion of the China Education Symposium at Harvard 2017 and the CHTA Disruptive Award. The core members of our team delivered a TED talk on the topics of AI and ML and a speech at Berkeley College of Music on “AI and Music”. In summer 2018, Learnable. ai attended Annual Meeting of the New Champions (Summer Davos), claiming the role of our team in shaping the new innovative societies."
        ]
    }

    sectionAbout() {
        return <div className="sectionAbout">
            <div className="description">
                {this.paragraphs.map((para, index) => (
                    <p key={index} style={{ textAlign: 'left' }}>{para}</p>
                ))}
            </div>
            <div className="images">
                <img src={mileStomeImage} />
            </div>
            {/* <div className="images">
                <ImageItem src={BerkleeImage} style={{ width: '33%' }} />
                <ImageItem src={CESImage} style={{ width: '33%' }} />
                <ImageItem src={DavosImage} style={{ width: '33%' }} />
            </div>
            <div className="images">
                <ImageItem src={MicrosoftImage} style={{ width: '33%' }} />
                <ImageItem src={NewYorkerImage} style={{ width: '33%' }} />
                <ImageItem src={TedImage} style={{ width: '33%' }} />
            </div> */}
        </div>
    }

    render() {
        return this.sectionAbout();
    }
}

export default AboutusSection;