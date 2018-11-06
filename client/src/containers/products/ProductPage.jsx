'use strict';

import React from 'react';
import { connect } from 'react-redux';
import OfficialPageReverseFrame from '../OfficialPageReverseFrame.jsx';

import ProductSection from './ProductSection.jsx';
import ProductMobileSection from './ProductMobileSection.jsx';
import ProductDetailSection from './ProductDetailSection.jsx';

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
        return <OfficialPageReverseFrame title="Product" description={description} highlightTitle="Product" browserChildren={[<ProductDetailSection key="pro" />]} mobileChildren={[<ProductDetailSection key="pro" />]} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);