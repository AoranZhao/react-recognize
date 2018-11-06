'use strict';

import React from 'react';

import './FloatBtn.scss';

class FloatBtn extends React.Component {
    constructor(props) {
        super(props);
        this.generateFloatBtn = this.generateFloatBtn.bind(this);
        this.state = {
            isCollapse: true,
            isOnHover: false
        }
        this.style = props.style || {};
        this.text = props.text || "unknown";
        this.isRev = props.isRev || false;
    }

    componentWillMount() {

    }

    generateFloatBtn() {
        let basicStyle = {};
        let style = Object.assign({}, basicStyle, this.style, this.state.isCollapse ? { right: '-100%' } : { right: '0' });
        let btnStyle = {};
        if (!this.isRev) {
            btnStyle['backgroundColor'] = 'rgba(30, 67, 118, 0.83)';
            btnStyle['color'] = 'white';
            btnStyle['border'] = '1px solid white';
        } else {
            btnStyle['color'] = 'white';
            btnStyle['border'] = '1px solid white';
        }
        return <div className="floatBtnFrame" onMouseEnter={e => {
            this.setState({ isOnHover: true });
        }} onMouseLeave={e => {
            this.setState({ isOnHover: false });
        }}>
            <div className="floatBtnHyperlinkFrame">
                <a href="" onClick={e => {
                    e.preventDefault();
                    this.setState({ isCollapse: !this.state.isCollapse });
                }} style={btnStyle}>{this.text}</a>
            </div>
            <div className="floatContentFrame" style={style}>
                <a href="" onClick={e => {
                    e.preventDefault();
                    this.setState({ isCollapse: true })
                }}>close</a>
                <p>content</p>
            </div>
        </div>
    }

    render() {
        return this.generateFloatBtn();
    }
}

export default FloatBtn;