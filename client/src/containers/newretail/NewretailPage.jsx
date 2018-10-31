'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import NewretailSection from './NewretailMobileSection.jsx';
import NewretailMobileSection from './NewretailMobileSection.jsx';

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
        let description = "Personalized policies and analytics from us build individual customer profile and realize personalized marketing, pricing and retailing policy.";
        let sectionDescription = "Personalized policies and analytics from us build individual customer profile and realize personalized marketing, pricing and retailing policy.";
        return <OfficialPageReverseFrame title="New Retail" description={description} highlightTitle="Products" browserChildren={[<NewretailSection key="retail" title="New Retail" description={sectionDescription} />]} mobileChildren={[<NewretailMobileSection key="retail" title="New Retail" description={sectionDescription} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewretailPage);