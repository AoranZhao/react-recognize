'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageFrame from './OfficialPageFrame.jsx';
import OfficialPageReverseFrame from './OfficialPageReverseFrame.jsx';

import { } from '../actions';

import './Career.scss';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class CareerPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionIntro = this.sectionIntro.bind(this);
        this.sectionJobs = this.sectionJobs.bind(this);
        this.sectionJob = this.sectionJob.bind(this);

        this.jobs = [{
            title: 'Machine Learning Engineer II',
            responsibilities: [
                'Lead/supervise implementation of ML models.',
                'Lead/supervise execution of experiments.'
            ],
            requirements: [],
            technicals: [
                'Satisfactory understanding of theory and detail of ML method (proof: independently implement from scratch and successfully train an ML model from recent literature in one of those libraries).',
                'Solid familiarity & comprehension of mainstream ML library (e.g. torch/pytorch/tensorflow).'
            ],
            specialties: [
                '\'Master\'s degree or equivalent course experience in Machine Learning (Classical ML, Deep Learning, Optimization, Linear Algebra, Algorithm/Probability Analysis).',
                'Graduate-level area of expertise in NLP/Vision/RL (proof: familiarity with topics contained in a modern graduate textbook).'
            ],
            leadership: [
                'Able to lead and coordinate teamwork with minimal supervision.',
                'One-year or above full-time working experience in AI/CV/Robotics/NLP/ML companies.'
            ]
        }, {
            title: 'Machine Learning Engineer I',
            responsibilities: [
                'Implement, and train ML model.',
                'Execute and monitor experiment.',
                'Prepare data.'
            ],
            requirements: [
                'Working familiarity & comprehension of mainstream ML library (e.g. torch/pytorch/tensorflow).',
                'Basic understanding of theory and detail of ML method.'
            ]
        }, {
            title: 'Software Engineer II',
            responsibilities: [
                'Implement functional features of products efficiently.'
            ],
            requirements: [
                'Solid programming skills and experience.',
                'Sufficient familiarity with least one programming language and at least one frontend/backend framework.',
                'Fast learner to unfamiliar technologies.',
                'Produces high-quality code observing basic SE principal.'
            ]
        }, {
            title: 'Data Scientist',
            responsibilities: [
                'Interpret and evaluate ML model performance.',
                'Conduct model diagnostics and provide insight for direction of model improvement.'
            ],
            requirements: [
                'Solid understanding of mainstream statistical models ((Generalized) Linear Regression, Logistic Regression, MLE & Bayesian Method). (master-level or above).',
                'Mastery of techniques in model evaluation and diagnostics.',
                'Satisfactory understanding of probability and mathematical statistics (upper-level undergraduate or above, topics may include heavy-tail probability distributions, a property of MLE estimators, asymptotics).'
            ]
        }]
    }

    componentWillMount() {

    }

    sectionIntro() {
        return <div className="sectionAboutIntro" key="aboutIntro">
            <div className="title">
                <span></span>
                <h3>Career</h3>
                <span></span>
            </div>
            <div className="description">
                <p>We are looking for full-time employees, part-time spring intern and summer interns with strong programming skills and applied experience in Machine Learning(ML) and Artificial intelligence(AI) to work on confidential projects that utilize the latest techniques in ML (especially Deep Learning and Reinforcement Learning), Computer Vision and Natura Language Processing.</p>
                <p>As an ML/SD engineer, you'll work with a smal and high-impact team, collaborating closely with company's principal research scientists who are mainly Ph.D.s and senior researchers from top universities, translating exciting research ideas into robust and scalable AI product that is revolutionary. We have a grand dream where all students get personalized and professional attention and tutoring, and we seek inspiring and motivated minds to achieve it together.</p>
                <p>To apply, please send your resume to contact@learnable.ai. We will reach out to you within one week after receiving your application.</p>
            </div>
        </div>
    }

    sectionJobs() {
        return <div style={{ width: '100%' }} key="aboutJobs">
            {this.jobs.map((job, index) => {
                return this.sectionJob(`job${index}`, job.title, job.responsibilities, job.requirements, job.technicals, job.specialties, job.leadership);
            })}
        </div>
    }

    sectionJob(key, title, responsibilities, requirements, technicals, specialties, leadership) {
        return <div className="sectionAboutJob" key={key}>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="content">
                <h3>Responsibilities:</h3>
                {responsibilities.map((res, index) => (<p key={`${key}res${index}`}>{index + 1}. {res}</p>))}
                <h3>Requirements:</h3>
                {(Array.isArray(requirements) && requirements.length > 0) ?
                    requirements.map((requ, index) => (<p key={`${key}requ${index}`}>{requ}</p>))
                    : <div></div>}
                {(Array.isArray(technicals) && technicals.length > 0) ? <div>
                    <h3>Technical excellence:</h3>
                    {technicals.map((tech, index) => (<p key={`${key}tech${index}`}>{tech}</p>))}
                </div> : <div></div>}
                {(Array.isArray(specialties) && specialties.length > 0) ? <div>
                    <h3>Domain specialty:</h3>
                    {specialties.map((spec, index) => (<p key={`${key}spec${index}`}>{spec}</p>))}
                </div> : <div></div>}
                {(Array.isArray(leadership) && leadership.length > 0) ? <div>
                    <h3>Leadership:</h3>
                    {leadership.map((leader, index) => (<p key={`${key}leader${index}`}>{leader}</p>))}
                </div> : <div></div>}
            </div>
        </div>
    }

    render() {
        let description = "welcome";
        return <OfficialPageReverseFrame title="Career" description={description} highlightTitle="Career" browserChildren={[this.sectionIntro(), this.sectionJobs()]} mobileChildren={[]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);