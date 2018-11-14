"use strict";

import React from 'react';

import './SidebarBtn.scss';

class SidebarBtn extends React.Component {
    constructor(props) {
        super(props);

        this.generateBtn = this.generateBtn.bind(this);
        this.logoSrc = props.logoSrc || "";

        this.state = {
            hide: true
        }

    }

    generateBtn() {
        let frameStyle = this.state.hide ? { display: 'none' } : { display: 'block' };
        let style = this.state.hide ? { left: '-100vw' } : { left: '0' };
        return <div className="sidebarBtnFrame">
            <div className="outerBtnFrame" onClick={e => {
                this.setState({ hide: !this.state.hide })
            }}>
                <img src={this.logoSrc} />
            </div>
            <div className="hiddenBtnFrame" style={frameStyle} onClick={e => {
                this.setState({ hide: !this.state.hide })
            }} >
                <div className="hiddenContentFrame" style={style} onClick={e => {
                    e.stopPropagation();
                }}>
                    <div className="hiddenContentHeader">
                        <a href="" onClick={e => {
                            e.preventDefault();
                            this.setState({ hide: !this.state.hide })
                        }}><p>&lt;&lt; close</p></a>
                    </div>
                    <div className="hiddenContentBody" onScroll={e => {
                        e.stopPropagation();
                    }}>
                        <div className="hiddenContentBodyScroll">
                            <a href="/" className="level0"><p>Home</p></a>
                            <a href="/technology" className="level0"><p>Technology</p></a>
                            <a href="#" className="level0"><p>Product</p></a>
                            <a href="/education" className="level1"><p>Education</p></a>
                            <a href="/aieducationalaccessories" className="level2"><p>Accessories</p></a>
                            <a href="/classroom" className="level2"><p>Classroom</p></a>
                            <a href="/newretail" className="level1"><p>New Retail</p></a>
                            <a href="#" className="level1"><p>Other</p></a>
                            <a href="#" className="level0"><p>About</p></a>
                            <a href="/about" className="level1"><p>About Us</p></a>
                            <a href="/career" className="level1"><p>Join Us</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        return this.generateBtn();
    }
}

export default SidebarBtn;