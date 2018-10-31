'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import EducationSection from './EducationSection.jsx';
import EducationMobileSection from './EducationMobileSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class EducationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Personalized educational products and analytics from us optimize the learning and teaching behaviors and realize personalized education experience.";
        let sectionDescription = "Personalized educational products and analytics from us optimize the learning and teaching behaviors and realize personalized education experience.";
        return <OfficialPageReverseFrame title="Education" description={description} highlightTitle="Products" browserChildren={[<EducationSection key="edu" title="Education" description={sectionDescription} />]} mobileChildren={[<EducationMobileSection key="edu" title="Education" description={sectionDescription} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);