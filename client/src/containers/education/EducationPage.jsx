'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import EducationSection from './EducationSection.jsx';
import EducationMobileSection from './EducationMobileSection.jsx';
import EducationDetailSection from './EducationDetailSection.jsx';
import EducationDetailMobileSection from './EducationDetailMobileSection.jsx';

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
        // let description = "Personalized educational products and analytics from us optimize the learning and teaching behaviors and realize personalized education experience.";
        let description = "AI empowers streamlined teaching & personalized Learning";
        return <OfficialPageReverseFrame title="Education" description={description} highlightTitle="Product" browserChildren={[<EducationDetailSection key="edu" />]} mobileChildren={[<EducationDetailMobileSection key="edu" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);