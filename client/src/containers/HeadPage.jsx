'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageFrame from './OfficialPageFrame.jsx';

import TechnologySection from './technology/TechnologySection.jsx';
import TechnologyMobileSection from './technology/TechnologyMobileSection.jsx';
import ProductsSection from './products/ProductSection.jsx';
import ProductsMobileSection from './products/ProductMobileSection.jsx';

import { } from '../actions';

import './HeadPage.scss';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class HeadPage extends React.Component {
    constructor(props) {
        super(props);

        this.sectionOneMobile = this.sectionOneMobile.bind(this);
        this.sectionTwoMobile = this.sectionTwoMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionOneMobile() {
        return <div className="sectionFlyMobile" key="oneMobile">
            <p>Section One for mobile</p>
        </div>
    }

    sectionTwoMobile() {
        return <div className="sectionTwoMobile" key="twoMobile">
            <p>Section Two for mobile</p>
        </div>
    }

    render() {
        let techDescription = "Our self-developed engines aim to integrate cutting-edge artificial intelligence technologies with traditional industries and existing ecosystems.";
        let proDescription = "Our products and services have demonstrated their huge potentials and impressive values in many traditional industries, including education, new-retail, etc.";
        return <OfficialPageFrame highlightTitle="Home" browserChildren={[
            <TechnologySection key="tech" title="Technology" description={techDescription} />,
            <ProductsSection key="pro" title="Products" description={proDescription} />
        ]} mobileChildren={[
            <TechnologyMobileSection key="techMobile" title="Technology" description={techDescription} />,
            <ProductsMobileSection key="proMobile" title="Products" description={proDescription} />
        ]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadPage);