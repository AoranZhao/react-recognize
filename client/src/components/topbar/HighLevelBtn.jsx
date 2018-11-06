'use strict';

import React from 'react';
import TopbarBtn from './TopbarBtn.jsx';

import './HighLevelBtn.scss';

class HighLevelBtn extends React.Component {
    constructor(props) {
        super(props);
        this.generateHighLevelBtn = this.generateHighLevelBtn.bind(this);
        this.state = {
            isCollapse: true,
            isOnHover: false
        }

        this.text = props.text || "unknown";
        this.to = props.to || "#";
        this.subBtns = props.subBtns || []; // [{text: "", to: ""}, {text: "", subBtns: []}]
        this.highlightTitle = props.highlightTitle || "[unknown]";
        this.isRev = props.isRev || false;
        this.isHighlighted = typeof props.isHighlighted == 'function' ? props.isHighlighted : (bool) => { console.log('highlight'); };
        this.zIndex = props.zIndex || 20;

        this.expandDirection = props.expandDirection || 'right';
        this.style = this.style || {};

    }

    generateHighLevelBtn() {
        let highlightStyle = {};
        let style = {};
        if (this.state.isOnHover || this.text == this.highlightTitle) {
            highlightStyle['borderBottom'] = "1px solid white";
        }
        if (this.text == this.highlightTitle) {
            this.isHighlighted(true);
        }
        if (this.isRev) {
            style['border'] = "1px solid white";
        } else {
            style['backgroundColor'] = 'rgba(30, 67, 118, 0.83)';
        }
        return <div className="highLevelBtnsFrame" onMouseEnter={e => {
            this.setState({ isCollapse: false, isOnHover: true });
        }} onMouseLeave={e => {
            this.setState({ isCollapse: true, isOnHover: false });
        }}>
            <div className="highLevelBtnFrame">
                {Array.isArray(this.subBtns) && this.subBtns.length > 0 ? <a href="" style={highlightStyle}>{this.text}</a> : <a href={this.to} style={highlightStyle}>{this.text}</a>}
            </div>
            {(!this.state.isCollapse && Array.isArray(this.subBtns) && this.subBtns.length > 0) ? <div className="highLevelSubBtnsFrame" style={style}>
                {this.subBtns.map((subBtn, index) => {
                    if (typeof subBtn.to !== 'undefined') {
                        return <TopbarBtn key={`${this.text}${index}`} text={subBtn.text} to={subBtn.to} />
                    } else if (typeof subBtn.subBtns !== 'undefined') {
                        return <HighLevelBtn key={`${this.text}${index}`} text={subBtn.text} to={subBtn.to} subBtns={subBtn.subBtns} />;
                    } else {
                        return <TopbarBtn key={`${this.text}${index}`} text={subBtn.text} to="#" />
                    }
                })}
            </div> : <div></div>}
        </div>
    }

    render() {
        return this.generateHighLevelBtn();
    }
}

export default HighLevelBtn;