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
        if (props.width != undefined)
            this.style = Object.assign(this.style, { width: props.width + 'px', height: props.width * 1.5 + "px" });
    }

    render() {
        return <div className="ImageItemFrame" style={this.style}>
            <div className="ImageItem" >
                <img src={this.imageSrc} onClick={e => {
                    this.onClick(e);
                }} />
            </div>
            {(!this.title && !this.description) ?
                <div></div>
                : <div className="ImageDetail">
                    <p style={{ fontWeight: 'blod' }}>{this.title}</p>
                    <p>{this.description}</p>
                </div>}
        </div>
    }
}

export default ImageItem;