'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import PravicyDetailSection from './PravicyDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class PravicyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Your privacy is important to us. This privacy statement explains the personal data Learnable.ai processes, how Learnable.ai processes it, and for what purposes.";
        return <OfficialPageReverseFrame title="Pravicy Statement" description={description} highlightTitle="Home" browserChildren={[<PravicyDetailSection key="pravicy" />]} mobileChildren={[<PravicyDetailSection key="pravicy" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PravicyPage);