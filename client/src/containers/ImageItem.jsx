'use strict';

import React from 'react';

import './ImageItem.scss';

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { isHovered: false };
        this.imageSrc = props.src;
        this.text = props.text || "";
        this.style = props.style || {};
        if (props.width != undefined)
            this.style = Object.assign(this.style, { width: props.width + 'px', height: props.width * 1.5 + "px" });
    }

    render() {
        // return <div className="ImageItemFrame" style={this.style} onMouseEnter={e => {
        //     e.preventDefault();
        //     this.setState({ isHovered: true });
        // }} onMouseLeave={e => {
        //     e.preventDefault();
        //     this.setState({ isHovered: false });
        // }}>
        return <div className="ImageItemFrame" style={this.style}>
            <div className="ImageItem" >
                <img src={this.imageSrc} />
                <p className="title">{this.text}</p>
            </div>
        </div>
    }
}

export default ImageItem;