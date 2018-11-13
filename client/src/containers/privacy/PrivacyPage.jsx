'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import PrivacyDetailSection from './PrivacyDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class PrivacyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Your privacy is important to us. This privacy statement explains the personal data Learnable.ai processes, how Learnable.ai processes it, and for what purposes.";
        return <OfficialPageReverseFrame title="Privacy Statement" description={description} highlightTitle="Home" browserChildren={[<PrivacyDetailSection key="privacy" />]} mobileChildren={[<PrivacyDetailSection key="privacy" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPage);