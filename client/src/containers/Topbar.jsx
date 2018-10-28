'use strict';

import React from 'react';
import TopbarBtn from '../components/TopbarBtn.jsx';

// import logoImage from '../static/images/Learnable_logo.png';
import logoImage from '../static/images/log_small.png';
import logoImageRev from '../static/images/log_small_rev.png';

import './Topbar.scss';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.highlightTitle = props.highlight;
        this.isRev = props.isRev || false;
    }

    render() {
        return <div className="sectionTopbar">
            <a href="/">
                <img src={this.isRev ? logoImageRev : logoImage} className="logo" />
            </a>
            <div className="selection">
                <TopbarBtn text="Home" isRev={this.isRev} isHighlight={this.highlightTitle == "Home" ? true : false} to="/" />
                <TopbarBtn text="Technology" isRev={this.isRev} isHighlight={this.highlightTitle == "Technology" ? true : false} to="/technology" />
                <TopbarBtn text="Solutions" isRev={this.isRev} isHighlight={this.highlightTitle == "Solutions" ? true : false} to="/solution"
                    subSelections={[
                        { text: 'Education', to: '/solution' },
                        { text: 'New Retail', to: '/solution' },
                        { text: 'Other', to: '/solution' }
                    ]} />
                <TopbarBtn text="About" isRev={this.isRev} isHighlight={this.highlightTitle == "About" ? true : false} to="/about" />
                {/* <TopbarBtn text="Career" isHighlight={this.highlightTitle == "Career" ? true : false} to="/career" /> */}
                <TopbarBtn text="Demo" isRev={this.isRev} isHighlight={this.highlightTitle == "Demo" ? true : false} to="/requestdemo" />
            </div>
        </div>
    }
}

export default Topbar;