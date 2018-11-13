"use strict";

import React from 'react';

import "./VideoDetailItem.scss";

class VideoDetailItem extends React.Component {
    constructor(props) {
        super(props);

        this.src = props.src || "";
        this.title = props.title || "";
        this.subTitle = props.subTitle || "";
        this.description = props.description || "";
        this.children = props.children;
        this.generateItem = this.generateItem.bind(this);
    }

    generateItem() {
        return <div className="videoDetailItem">
            <div className="videoDetailItemHeader">
                <span></span>
                <p>&#9733;</p>
                <span></span>
            </div>
            <div className="videoDetailItemVideoFrame">
                <video controls>
                    <source src={this.src} type="video/mp4" />
                </video>
            </div>
            <div className="videoDetailItemTextFrame">
                <h3>{this.title}</h3>
                <h4>{this.subTitle}</h4>
                <p>{this.description}</p>
                <div>
                    {this.children}
                </div>
            </div>
        </div>
    }

    render() {
        return this.generateItem();
    }
}

export default VideoDetailItem;