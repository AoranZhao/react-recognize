'use strict';

import React from 'react';

import './TopbarBtn.scss';

let highlight_color = '#005ae0';
let background_color = '#d3d3d3';

class TopbarBtn extends React.Component {
    constructor(props) {
        super(props);
        let state = { show: false };
        this.text = props.text || "unknown";
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
        return <div className="selectionBtn" style={this.state.show ? { backgroundColor: background_color } : {}} onMouseEnter={e => {
            e.preventDefault();
            this.setState({ show: true });
        }} onMouseLeave={e => {
            e.preventDefault();
            this.setState({ show: false });
        }}>
            <a href={this.to} className="root" style={(this.isHighlight || this.state.show) ? { color: highlight_color } : {}}>{this.text}</a>
            <div className="hiddenFrame" style={{ backgroundColor: background_color, zIndex: '1', display: this.state.show ? 'block' : 'none' }} >
                {this.subSelections.map((sub, index) => (<a key={index} href={sub.to} style={sub.highlight ? { color: highlight_color } : {}} onClick={e => {
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