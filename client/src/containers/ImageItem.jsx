'use strict';

import React from 'react';

import './ImageItem.scss';

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrc = props.src;
        this.title = props.title || "";
        this.description = props.description || "";
        this.style = props.style || {};
        this.onClick = (typeof props.onClick == 'function') ? props.onClick : () => { };
        this.onHeightChange = (typeof props.onHeightChange == 'function') ? props.onHeightChange : () => { };
        if (props.width != undefined)
            this.style = Object.assign(this.style, { width: props.width + 'px', height: props.width * 1.5 + "px" });
    }

    render() {
        return <div className="imageItemFrame" style={this.style}>
            <div className="imageItem" >
                <img src={this.imageSrc} onClick={e => {
                    this.onClick(e);
                }} />
            </div>
            {(!this.title && !this.description) ?
                <div></div>
                : <div className="imageInfo">
                    <p className="imageInfoTitle">{this.title}</p>
                    <p className="imageInfoDescription">{this.description}</p>
                </div>}
        </div>
    }
}

export default ImageItem;