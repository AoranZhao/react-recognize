'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import CareerSection from './CareerSection.jsx';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class CareerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Learnable develops cutting-edge AI engines, with the world’s leading talents. We attract innovators from top universities and industry to inject ideas and technologies into our team. If you are interested, join us now!";
        return <OfficialPageReverseFrame title="Join Us" description={description} highlightTitle="About" browserChildren={[<CareerSection key="career" title="Join Us" description={description} />]} mobileChildren={[<CareerSection key="career" title="Join Us" description={description} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);