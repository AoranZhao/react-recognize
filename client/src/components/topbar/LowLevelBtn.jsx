'use strict';

import React from 'react';

import HighLevelBtn from './HighLevelBtn.jsx';

import './LowLevelBtn.scss';

class LowLevelBtn extends React.Component {
    constructor(props) {
        super(props);
        this.generateLowLevelBtn = this.generateLowLevelBtn.bind(this);
        this.state = {
            isCollapse: true
        }

        this.text = props.text || "unknown";
        this.to = props.to || "#";
        this.subBtns = props.subBtns; // [{text: "", to: ""}, {text: "", subBtns: []}]
        this.highlightTitle = props.highlightTitle || "[unknown]";
        this.isRev = props.isRev || false;

        this.style = props.style || {};
    }

    generateLowLevelBtn() {
        let hoverStyle = { color: 'white' };
        let nonhoverStyle = {};
        let fontStyle = this.state.isCollapse ? {} : { color: 'white' };
        if (!this.isRev) {
            hoverStyle['backgroundColor'] = 'rgba(30, 67, 118, 0.83)';
        } else {
            fontStyle['color'] = 'white';
        }
        let style = this.state.isCollapse ? nonhoverStyle : hoverStyle;

        if (this.highlightTitle == this.text && this.state.isCollapse) {
            if (this.isRev) {
                fontStyle['borderBottom'] = "1px solid white";
            } else {
                fontStyle['borderBottom'] = "1px solid rgba(30, 67, 118, 0.83)";
            }
        }

        return <div className="lowLevelBtnFrame" onMouseEnter={e => {
            this.setState({ isCollapse: false })
        }} onMouseLeave={e => {
            this.setState({ isCollapse: true })
        }}>
            <div className="lowLevelBtnHyperlinkFrame" style={style}>
                {Array.isArray(this.subBtns) ? <a href="" style={fontStyle}>{this.text}</a> : <a href={this.to} style={fontStyle}>{this.text}</a>}
            </div>
            {(!this.state.isCollapse && Array.isArray(this.subBtns)) ? <div className="lowLevelSubBtnsFrame" style={Object.assign({}, style, { paddingBottom: '5px' })}>
                {this.subBtns.map((subBtn, index) => {
                    return <HighLevelBtn key={index} text={subBtn.text} to={subBtn.to} subBtns={subBtn.subBtns} isRev={this.isRev} />
                })}
            </div> : <div className="lowLevelSubBtnsFrame"></div>}
        </div>
    }

    render() {
        return this.generateLowLevelBtn();
    }
}

export default LowLevelBtn;