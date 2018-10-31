'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import ProductSection from './ProductMobileSection.jsx';
import ProductMobileSection from './ProductMobileSection.jsx';

import { } from '../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let description = "Our products and services have demonstrated their huge potentials and impressive values in many traditional industries, including education, new-retail, etc.";
        let sectionDescription = "Our products and services have demonstrated their huge potentials and impressive values in many traditional industries, including education, new-retail, etc.";
        return <OfficialPageReverseFrame title="Products" description={description} highlightTitle="Products" browserChildren={[<ProductSection key="pro" title="Products" description={sectionDescription} />]} mobileChildren={[<ProductMobileSection key="pro" title="Products" description={sectionDescription} />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);