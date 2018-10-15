'use strict';

import React from 'react';

import './ImageItemMobile.scss';

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrc = props.src;
        this.text = props.text || "";
        this.style = props.style || {};
        if (props.width != undefined)
            this.style = Object.assign(this.style, { width: props.width + 'px', height: props.width * 0.3 + "px" });
    }

    render() {
        return <div className="ImageItemMobileFrame" style={this.style}>
            <div className="ImageItemMobile" >
                <img src={this.imageSrc} />
                {/* <p className="title">{this.text}</p> */}
            </div>
        </div>
    }
}

export default ImageItem;