'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import TechnologySection from './TechnologySection.jsx';
import TechnologyMobileSection from './TechnologyMobileSection.jsx';

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
        let description = "Our self-developed engines aim to integrate cutting-edge artificial intelligence technologies with traditional industries and existing ecosystems.";
        let sectionDescription = "Our self-developed engines aim to integrate cutting-edge artificial intelligence technologies with traditional industries and existing ecosystems.";
        return <OfficialPageReverseFrame title="Technology" description={description} highlightTitle="Technology" browserChildren={[<TechnologySection key="tech" title="Technology" description={sectionDescription} />]} mobileChildren={[<TechnologyMobileSection key="tech" title="Technology" description={sectionDescription} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyPage);