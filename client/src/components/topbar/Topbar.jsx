'use strict';

import React from 'react';

import LowLevelBtn from './LowLevelBtn.jsx';
import logoImage from '../../static/images/logo_large_purple.png';
import logoImageRev from '../../static/images/logo_large_white.png';

import './topbar.scss';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.generateComponent = this.generateComponent.bind(this);

        this.subBtns = props.subBtns || []; // [{text: "", to: ""}, {text: "", subBtns: []}]
        this.otherBtns = props.otherBtns || [];
        this.highlightTitle = props.highlightTitle || "[unknown]";
        this.style = props.style || {};

        this.isRev = props.isRev || false;
    }

    componentWillMount() {

    }

    generateComponent() {
        let defaultStyle = {};
        let style = Object.assign({}, defaultStyle, this.style, this.isRev ? { color: 'white' } : { color: 'white', backgroundColor: 'white' });
        // rgba(100, 100, 100, 0.9)
        // backgroundColor: 'rgba(30, 67, 118, 0.83)'
        return <div className="topbarFrame" style={style}>
            <div className="topbarLogoFrame">
                <a href="/">
                    <img src={this.isRev ? logoImageRev : logoImage} />
                </a>
            </div>
            <div className="topbarSelectFrame">
                {this.subBtns.map((subBtn, index) => {
                    return <div key={`subbtn${index}`} className="btnFrame">
                        <LowLevelBtn text={subBtn.text} to={subBtn.to} subBtns={subBtn.subBtns} highlightTitle={this.highlightTitle} isRev={this.isRev} />
                    </div>
                })}
                {this.otherBtns.map((otherBtn, index) => {
                    return <div key={`otherbtn${index}`} className="btnFrame">
                        {otherBtn}
                    </div>
                })}
            </div>
        </div>
    }

    render() {
        return this.generateComponent();
    }
}

export default Topbar;