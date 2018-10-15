'use strict';

import React from 'react';

import './TopbarMobileBtn.scss';

class TopbarMobileBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.text = props.text || "unknown";
        this.onClick = typeof props.click == 'undefined' ? () => { } : props.click;
        this.to = props.to || "#";
        this.styles = this.styles || {};
        this.subSelections = props.subSelections || [];
    }

    render() {
        return <div className="topbarMobileBtn" style={this.styles}>
            <a className="main" href={this.to} onClick={e => {
                this.onClick();
            }}>{this.text}</a>
            {(typeof this.subSelections != 'undefined') ? <div>
                {this.subSelections.map((sub, index) => (<a className="sub" href={sub.to} key={index} onClick={e => {
                    this.onClick();
                }}>{sub.text}</a>))}
            </div> : <div></div>}
        </div>
    }
}

export default TopbarMobileBtn;