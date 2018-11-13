'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import AIEduAccDetailSection from './AIEduAccDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class AIEduAccPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Learnable’s AI-powered tool kit can streamline and upgrade many components in the education pipeline. It automatically digitalizes, structuralizes and analyzes your educational materials with incredible speed and accuracy.";
        return <OfficialPageReverseFrame title="AI Educational Accessories" description={description} highlightTitle="Product" browserChildren={[<AIEduAccDetailSection key="aiEduAcc" />]} mobileChildren={[<AIEduAccDetailSection key="aiEduAcc" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AIEduAccPage);