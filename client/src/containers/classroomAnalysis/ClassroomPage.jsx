"use strict";

import React from "react";
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import ClassroomDetailSection from './ClassroomDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class ClassroomPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Learnable’s Classroom Cognitive Analysis solution can assess classroom teaching and learning behaviors. It is an effective tool for teacher training, key indicator for teacher evaluation and meaningful reflection for education policy implementation.";
        return <OfficialPageReverseFrame title="Classroom Video Analysis AI" description={description} highlightTitle="Product" browserChildren={[<ClassroomDetailSection key="classroom" />]} mobileChildren={[<ClassroomDetailSection key="classroom" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomPage);