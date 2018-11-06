'use strict';

import React from 'react';

import './ImageDetailItem.scss';

class ImageDetailItem extends React.Component {
    constructor(props) {
        super(props);
        this.image = props.src || "";
        this.title = props.title || "";
        this.description = props.description || "";
        this.style = props.style || {};

        this.generateImageDetailItem = this.generateImageDetailItem.bind(this);
    }

    generateImageDetailItem() {
        return <div className="imageDetailItem">
            <div className="imageDetailImage">
                <img src={this.image} />
            </div>
            <div className="imageDetailInfo">
                <div className="imageDetailInfoTitle">
                    <h3>{this.title}</h3>
                </div>
                <div className="imageDetailInfoDescription">
                    <p>{this.description}</p>
                </div>
            </div>
        </div>
    }

    render() {
        return this.generateImageDetailItem();
    }
}

export default ImageDetailItem;