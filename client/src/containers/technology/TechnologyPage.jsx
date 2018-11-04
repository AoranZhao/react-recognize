'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import TechnologySection from './TechnologySection.jsx';
import TechnologyMobileSection from './TechnologyMobileSection.jsx';
import TechnologyDetailSection from './TechnologyDetailSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class TechnologyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        // let description = "Our self-developed engines aim to integrate cutting-edge artificial intelligence technologies with traditional industries and existing ecosystems.";
        let description = "Customize artificial intelligence for industry localization with the human touch.";
        return <OfficialPageReverseFrame title="Technology" description={description} highlightTitle="Technology" browserChildren={[<TechnologyDetailSection key="tech" />]} mobileChildren={[<TechnologyDetailSection key="tech" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyPage);