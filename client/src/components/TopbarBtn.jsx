'use strict';

import React from 'react';

import './TopbarBtn.scss';

let isCurrentStyle = {
    borderBottom: "1px solid rgba(30, 67, 118, 0.81)"
}

let hightlightStyle = {
    borderBottom: "1px solid rgba(30, 67, 118, 0.81)"
};

let showStyle = {
    borderTop: "1px solid rgba(30, 67, 118, 0.81)",
    borderLeft: "1px solid rgba(30, 67, 118, 0.81)",
    borderRight: "1px solid rgba(30, 67, 118, 0.81)",
}

let subShowStyle = {
    borderLeft: "1px solid rgba(30, 67, 118, 0.81)",
    borderRight: "1px solid rgba(30, 67, 118, 0.81)",
    borderBottom: "1px solid rgba(30, 67, 118, 0.81)",
}
// let highlight_color = '#005ae0';
// let background_color = '#d3d3d3';

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

        this.subSelections.map((val, index) => {
            let key = `subHighlight${index}`;
            Object.assign(state, { [key]: false });
            return val;
        });
        this.state = state;
    }

    render() {
        let titleFrameStyle = {}, titleStyle = {};
        if (this.state.show)
            titleFrameStyle = Object.assign(titleFrameStyle, showStyle);
        else if (this.isCurrent)
            titleStyle = Object.assign(titleStyle, isCurrentStyle);

        return <div className="selectionBtn" onMouseEnter={e => {
            e.preventDefault();
            this.setState({ show: true });
        }} onMouseLeave={e => {
            e.preventDefault();
            this.setState({ show: false });
        }}>
            <div className="titleFrame" style={titleFrameStyle}>
                <a href={this.to} className="root" style={titleStyle} >{this.text}</a>
            </div>
            <div className="hiddenFrame" style={Object.assign({ zIndex: '1', display: this.state.show ? 'block' : 'none' }, subShowStyle)} >
                {this.subSelections.map((sub, index) => (<a key={index} href={sub.to} className="subTitle" style={sub.highlight ? hightlightStyle : {}} onClick={e => {
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