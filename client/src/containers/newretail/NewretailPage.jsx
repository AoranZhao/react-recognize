'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import NewretailSection from './NewretailSection.jsx';
import NewretailMobileSection from './NewretailMobileSection.jsx';
import NewretailDetailSection from './NewretailDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class NewretailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        // let description = "Personalized policies and analytics from us build individual customer profile and realize personalized marketing, pricing and retailing policy.";
        let description = "AI unlocks Offline-to-Online solutions";
        return <OfficialPageReverseFrame title="New Retail" description={description} highlightTitle="Products" browserChildren={[<NewretailDetailSection key="retail" />]} mobileChildren={[<NewretailDetailSection key="retail" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewretailPage);