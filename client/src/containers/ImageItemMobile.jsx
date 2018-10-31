'use strict';

import React from 'react';

import './ImageItemMobile.scss';

class ImageItemMobile extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrc = props.src;
        this.showDetail = props.showDetail;
        this.onClick = (typeof props.onClick == 'function') ? props.onClick : e => { };
        this.title = props.title || "";
        this.description = props.description || "";
        this.basicStyle = { zIndex: 5 };
        this.style = Object.assign(this.basicStyle, props.style) || this.basicStyle;
    }

    componentWillReceiveProps(props) {
        this.showDetail = props.showDetail;
    }

    render() {
        return <div className="ImageItemMobileFrame" style={this.style}>
            <div className="ImageItemMobile" >
                <img src={this.imageSrc} onClick={e => {
                    this.onClick();
                }} />
            </div>
            {
                (!this.title && !this.description) ?
                    <div></div>
                    : <div className="ImageItemMobileDetail" style={this.showDetail ? { display: 'block' } : { display: 'none' }}>
                        <p style={{ fontWeight: 'blod' }}>{this.title}</p>
                        <p>{this.description}</p>
                    </div>
            }
        </div>
    }
}

export default ImageItemMobile;