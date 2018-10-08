'use strict';

import React from 'react';
import TopbarBtn from '../components/TopbarBtn.jsx';

import logoImage from '../static/images/Learnable_logo.png';

import './Topbar.scss';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.highlightTitle = props.highlight;
    }

    render() {
        return <div className="sectionTopbar">
            <img src={logoImage} className="logo" />
            <div className="selection">
                <TopbarBtn text="Home" isHighlight={this.highlightTitle == "Home" ? true : false} to="/" />
                <TopbarBtn text="Technology" isHighlight={this.highlightTitle == "Technology" ? true : false} to="/technology" />
                <TopbarBtn text="Solutions" isHighlight={this.highlightTitle == "Solutions" ? true : false} to="/solution"
                    subSelections={[
                        { text: 'Education', to: '/solution' },
                        { text: 'New Retail', to: '/solution' },
                        { text: 'Other', to: '/solution' }
                    ]} />
                <TopbarBtn text="About" isHighlight={this.highlightTitle == "About" ? true : false} to="/about" />
                <TopbarBtn text="Career" isHighlight={this.highlightTitle == "Career" ? true : false} to="/career" />
            </div>
        </div>
    }
}

export default Topbar;