'use strict';

import React from 'react';

import './TopbarBtn.scss';

class TopbarBtn extends React.Component {
    constructor(props) {
        super(props);
        this.generateBtn = this.generateBtn.bind(this);
        this.state = {
            isOnHover: false
        }

        this.to = props.to || "#";
        this.text = props.text || "unknown";
        this.highlightTitle = props.highlightTitle || "[unknown]";
        this.isHighlighted = typeof props.isHighlighted == 'function' ? props.isHighlighted : (bool) => { console.log('highlight'); };
        // this.zIndex = props.zIndex || 50;

        this.style = props.style || {};
    }

    generateBtn() {
        let highlightStyle = {};
        if (this.state.isOnHover || this.text == this.highlightTitle) {
            highlightStyle['borderBottom'] = "1px solid white";
        }
        if (this.text == this.highlightTitle) {
            this.isHighlighted(true);
        }
        return <div className="topbarBtnFrame" style={this.style} onMouseEnter={e => {
            this.setState({ isOnHover: true });
        }} onMouseLeave={e => {
            this.setState({ isOnHover: false })
        }}>
            <div className="topbarBtn">
                <a href={this.to} style={highlightStyle}>{this.text}</a>
            </div>
        </div>
    }

    render() {
        return this.generateBtn();
    }
}

export default TopbarBtn;