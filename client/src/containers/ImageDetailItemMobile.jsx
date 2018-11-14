'use strict';

import React from 'react';

import './ImageDetailItemMobile.scss';

class ImageDetailItem extends React.Component {
    constructor(props) {
        super(props);
        this.image = props.src || "";
        this.title = props.title || "";
        this.description = props.description || "";
        this.style = props.style || {};
        this.textTo = props.textTo;

        this.generateImageDetailItemLarge = this.generateImageDetailItemLarge.bind(this);
        this.generateImageDetailItemSmall = this.generateImageDetailItemSmall.bind(this);
    }

    generateImageDetailItemSmall() {
        return <div className="imageDetailItemMobileSmall">
            <div className="imageDetailMobileImage">
                <img src={this.image} />
            </div>
            <div className="imageDetailMobileInfo">
                <div className="imageDetailMobileInfoTitle">
                    <h3>{this.title}</h3>
                </div>
                <div className="imageDetailMobileInfoDescription">
                    <h3>{this.description}</h3>
                    {
                        (typeof this.textTo !== 'undefined') ?
                            <a href={this.textTo}>
                                <p>details ...</p>
                            </a> : <div></div>
                    }
                </div>
            </div>
        </div>
    }

    generateImageDetailItemLarge() {
        return <div className="imageDetailItemMobileLarge">
            <div className="imageDetailMobileImage">
                <img src={this.image} />
            </div>
            <div className="imageDetailMobileInfo">
                <div className="imageDetailMobileInfoTitle">
                    <h3>{this.title}</h3>
                </div>
                <div className="imageDetailMobileInfoDescription">
                    <h3>{this.description}</h3>
                    {
                        (typeof this.textTo !== 'undefined') ?
                            <a href={this.textTo}>
                                <p>details ...</p>
                            </a> : <div></div>
                    }
                </div>
            </div>
        </div>
    }

    generateImageDetailItem() {
        return <div className="imageDetailItemMobile">
            {this.generateImageDetailItemLarge()}
            {this.generateImageDetailItemSmall()}
        </div>
    }

    render() {
        return this.generateImageDetailItem();
    }
}

export default ImageDetailItem;