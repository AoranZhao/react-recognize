'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import AboutusSection from './AboutusSection.jsx';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class AboutusPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be operated, taught, and trusted by generations.";
        return <OfficialPageReverseFrame title="About Us" description={description} highlightTitle="About" browserChildren={[<AboutusSection key="about" title="About Us" description={description} />]} mobileChildren={[<AboutusSection key="about" title="About Us" description={description} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutusPage);