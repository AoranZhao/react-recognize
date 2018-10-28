'use strict';

import React from 'react';

import './RequestDemoSection.scss';

class RequestDemoSection extends React.Component {
    constructor(props) {
        super(props);
        this.sectionRequestDemo = this.sectionRequestDemo.bind(this);
    }

    sectionRequestDemo() {
        return <div className="sectionRequestDemo" key="request">
            <p>Request Demo Section</p>
        </div>
    }

    render() {
        return this.sectionRequestDemo();
    }
}

export default RequestDemoSection;