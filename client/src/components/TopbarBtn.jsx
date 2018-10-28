'use strict';

import React from 'react';

import './TopbarBtn.scss';

let blue = "rgba(30, 67, 118, 0.81)",
    white = "white";

let isCurrentStyle = (color) => ({
    borderBottom: `1px solid ${color}`
})

let hightlightStyle = (color) => ({
    borderBottom: `1px solid ${color}`
})

let showStyle = (color) => ({
    borderTop: `1px solid ${color}`,
    borderLeft: `1px solid ${color}`,
    borderRight: `1px solid ${color}`,
})

let subShowStyle = (color) => ({
    borderLeft: `1px solid ${color}`,
    borderRight: `1px solid ${color}`,
    borderBottom: `1px solid ${color}`,
})

class TopbarBtn extends React.Component {
    constructor(props) {
        super(props);
        let state = { show: false };
        this.text = props.text || "unknown";
        this.isCurrent = props.isHighlight || false;
        this.isHighlight = props.isHighlight || false;
        this.click = props.click ? props.click : () => { };
        this.to = props.to || "#";
        this.subSelections = props.subSelections || [];
        this.isRev = props.isRev || false;
        this.color = this.isRev ? white : blue;
        this.fontColor = {
            color: this.color
        }
        this.frameColor = {
            borderColor: this.color
        }

        this.subSelections.map((val, index) => {
            let key = `subHighlight${index}`;
            Object.assign(state, { [key]: false });
            return val;
        });
        this.state = state;
    }

    render() {
        let titleFrameStyle = Object.assign({}, this.fontColor), titleStyle = Object.assign({}, this.fontColor);
        if (this.state.show)
            titleFrameStyle = Object.assign(titleFrameStyle, showStyle(this.color), this.frameColor);
        else if (this.isCurrent)
            titleStyle = Object.assign(titleStyle, isCurrentStyle(this.color), this.frameColor);


        return <div className="selectionBtn" style={Object.assign({}, this.fontColor)} onMouseEnter={e => {
            e.preventDefault();
            this.setState({ show: true });
        }} onMouseLeave={e => {
            e.preventDefault();
            this.setState({ show: false });
        }}>
            <div className="titleFrame" style={titleFrameStyle}>
                <a href={this.to} className="root" style={titleStyle} >{this.text}</a>
            </div>
            <div className="hiddenFrame" style={Object.assign({ zIndex: '1', display: this.state.show ? 'block' : 'none' }, subShowStyle(this.color), this.frameColor, this.fontColor)} >
                {this.subSelections.map((sub, index) => (<a key={index} href={sub.to} className={this.isRev ? "subTitleRev" : "subTitle"} style={sub.highlight ? Object.assign({}, hightlightStyle(this.color), this.frameColor, this.fontColor) : Object.assign({}, this.fontColor)} onClick={e => {
                    // this.setState({ show: false });
                }} onMouseEnter={e => {
                    e.preventDefault();
                    let key = `subHighlight${index}`;
                    this.setState({ [key]: true });
                }} onMouseLeave={e => {
                    e.preventDefault();
                    let key = `subHighlight${index}`;
                    this.setState({ [key]: false });
                }}>{sub.text}</a>))}
            </div>
        </div>
    }
}

export default TopbarBtn;