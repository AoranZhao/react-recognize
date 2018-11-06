'use strict';

import React from 'react';

import './CareerSection.scss';

class CareerSection extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title || "";
        this.description = props.description || "";
        this.descriptionOne = "We are looking for full-time employees and part-time interns with strong programming skills and applied experience in Machine Learning (ML) and Artificial Intelligence (AI) to work on confidential projects that utilize the latest techniques in ML (especially Deep Learning and Reinforcement Learning), Computer Vision and Natural Language Processing.";
        this.descriptionTwo = "We’re also looking for Full Stack developers who will take a key role on our team. Our Full Stack developer must have knowledge in all stages of software development. You will be part of an elite team to build scalable services to support web-based applications. You will create secure, multi-tenant services and supporting infrastructure, including databases and middleware. You will work closely with other teams to identify and meet their needs in a collaborative, agile environment.";
        this.descriptionThree = "To apply, please send your resume to contact@learnable.ai. We will reach out to you within one week after receiving your application.";
        this.sectionCareer = this.sectionCareer.bind(this);
        this.sectionJobs = this.sectionJobs.bind(this);
        this.sectionJob = this.sectionJob.bind(this);

        this.jobsOne = [{
            title: "Senior Machine Learning Engineer",
            responsibilities: [
                "Lead/supervise implementation of ML models",
                "Lead/supervise execution of experiments"
            ],
            requirements: [
                "Master's degree or equivalent course experience in Machine Learning (Classical ML, Deep Learning, Optimization, Linear Algebra, Algorithm/Probability Analysis)",
                "Graduate-level area of expertise in NLP/Vision/RL",
                "One-year or above full-time working experience in AI/CV/Robotics/NLP/ML companies",
                "Satisfactory understanding of theory and detail of ML method",
                "Solid familiarity & comprehension of mainstream ML library (e.g. torch/pytorch/tensorflow)"
            ]
        }, {
            title: "Junior Machine Learning Engineer",
            responsibilities: [
                "Implement,and train ML model",
                "Execute and monitor experiment",
                "Prepare data"
            ],
            requirements: [
                "Working familiarity & comprehension of mainstream ML library (e.g. torch/pytorch/tensorflow)",
                "Basic understanding of theory and detail of ML method"
            ]
        }]
        this.jobsTwo = [{
            title: "Full-Stack Developer",
            responsibilities: [
                "Design and extend SQL and NoSQL databases for high volume of network data.",
                "Implement secure and robust RESTful services supporting a variety of web clients and mobile applications that handles high volume of network traffic.",
                "Responsible for writing unit tests and integrated acceptance tests.",
                "Work closely with our backend ML engineers and scientist to continually verify and deploy new releases."
            ],
            requirements: [
                "BS degree in Computer Science, Information Systems, Math, related technical field or equivalent practical experience.",
                "Experience designing and building cloud-based APIs from scratch.",
                "Experience deploying and scaling high-traffic services in the cloud (Aliyun, AWS/EC2, etc.).",
                "Experience integrating with a variety of SQL and NoSQL databases such as MySQL, PostgreSQL, MongoDB, Cassandra, Redis.",
                "Strong programming skills in two or more of Ruby, Python, Java, NodeJS.",
                "Experience with software testing, and familiarity with Test-Driven and Behavior-Driven Development (TDD/BDD).",
                "Comfortable with Linux, shell-scripting, git."
            ],
            preferred: [
                "MSc/PhD in Computer Science, Information Systems or related technical field.",
                "Experience designing high-performance, secure, multi-tenant service-oriented architectures.",
                "Experience with authentication and authorization in the cloud, including access token and secrets management, Single Sign-in, OAuth, Omniauth.",
                "Familiarity with Cloud computing Environment and Service in Mainland China."
            ]
        }]
    }

    sectionJobs(jobs, key) {
        return <div style={{ width: '100%' }} key={key}>
            {jobs.map((job, index) => {
                return this.sectionJob(`job${index}`, job.title, job.responsibilities, job.requirements, job.preferred);
            })}
        </div>
    }

    sectionJob(key, title, responsibilities, requirements, preferred) {
        return <div className="sectionAboutJob" key={key}>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="content">
                <h3>Responsibilities:</h3>
                {responsibilities.map((res, index) => (<p key={`${key}res${index}`}>{index + 1}. {res}</p>))}
                <h3>Requirements:</h3>
                {(Array.isArray(requirements) && requirements.length > 0) ?
                    requirements.map((requ, index) => (<p key={`${key}requ${index}`}>{index + 1}. {requ}</p>))
                    : <div></div>}
                {(Array.isArray(preferred) && preferred.length > 0) ? <div>
                    <h3>Preferred qualifications:</h3>
                    {preferred.map((pref, index) => (<p key={`${key}pref${index}`}>{index + 1}. {pref}</p>))}
                </div> : <div></div>}
            </div>
        </div>
    }

    sectionCareer() {
        return <div className="sectionCareer">
            <div className="description">
                <div className="descriptionHeader">
                    <span></span>
                    <p>&#9733;</p>
                    <span></span>
                </div>
                <p style={{ fontWeight: 'bold' }}><em>{this.descriptionOne}</em></p>
            </div>
            {this.sectionJobs(this.jobsOne, 'jobOne')}
            <div className="description">
                <div className="descriptionHeader">
                    <span></span>
                    <p>&#9733;</p>
                    <span></span>
                </div>
                <p style={{ fontWeight: 'bold' }}><em>{this.descriptionTwo}</em></p>
            </div>
            {this.sectionJobs(this.jobsTwo, 'jobTwo')}
            <div className="description">
                <p style={{ fontWeight: 'bold' }}><em>{this.descriptionThree}</em></p>
            </div>
        </div>
    }

    render() {
        return this.sectionCareer();
    }
}

export default CareerSection;