'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Topbar from './Topbar.jsx';
import TopbarMobile from './TopbarMobile.jsx';

import { } from '../actions';

import './OfficialPageReverseFrame.scss';

import FootSection from './FootSection.jsx';
import FootMobileSection from './FootMobileSection.jsx';

// test Topbar
import TestTopbar from '../components/topbar/Topbar.jsx';
import FloatBtn from '../components/floatBtn/FloatBtn.jsx';
import RequestDemoSection from './requestdemo/RequestDemoSection.jsx';
// end test

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

class OfficialPageReverseFrame extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title || "Title";
        this.description = props.description || "description";
        this.highlightTitle = props.highlightTitle || "";
        this.browserChildren = props.browserChildren || [];
        this.mobileChildren = props.mobileChildren || [];

        this.sectionFly = this.sectionFly.bind(this);
        this.sectionBrowserChildren = this.sectionBrowserChildren.bind(this);
        this.sectionFoot = this.sectionFoot.bind(this);
        this.sectionFlyMobile = this.sectionFlyMobile.bind(this);
        this.sectionFootMobile = this.sectionFootMobile.bind(this);

        this.subBtns = [{ text: "Home", to: "/" },
        { text: "Technology", to: "/technology" },
        {
            text: "Product", subBtns: [
                {
                    text: "Education", to: "/education"
                },
                {
                    text: "New Retail", to: "/newretail"
                },
                {
                    text: "Other", subBtns: [
                        { text: "Pravicy", to: "/pravicy" },
                        { text: "Demo", to: "/requestdemo" }
                    ]
                }
            ]
        },
        {
            text: "About", subBtns: [
                { text: "About Us", to: "/about" },
                { text: "Join Us", to: "/career" }
            ]
        }]
    }

    componentWillMount() {

    }

    sectionFly() {
        let otherBtns = [<FloatBtn key="float1" text="Demo" title="" isRev={true}>
            <RequestDemoSection isRev={true} />
        </FloatBtn>];
        return <div className="sectionFlyRevFrame">
            <div className="sectionFlyRev">
                {/* <Topbar highlight={this.highlightTitle} isRev={true} /> */}
                <TestTopbar subBtns={this.subBtns} otherBtns={otherBtns} isRev={true} highlightTitle={this.highlightTitle} />
                <div className="sectionFlyRevBody">
                    <div className="sectionFlyRevBodyText">
                        <h3>{this.title}</h3>
                        <p>{this.description}</p>
                    </div>
                </div>
            </div>
        </div>
    }

    sectionBrowserChildren() {
        return <div className="sectionBrowserChildrenRevFrame">
            {this.browserChildren}
        </div>
    }

    sectionFoot() {
        return <div className="sectionFootRevFrame">
            <div className="sectionFootRevFrameInside">
                <FootSection />
            </div>
        </div>
    }

    sectionFlyMobile() {
        return <div className="sectionFlyRevMobile">
            <TopbarMobile highlight={this.highlightTitle} isRev={true} />
            <div className="sectionFlyRevMobileBodySmall">
                <div className="sectionFlyRevMobileBodyText">
                    <h3>{this.title}</h3>
                    <p>{this.description}</p>
                </div>
            </div>
            <div className="sectionFlyRevMobileBodyLarge">
                <div className="sectionFlyRevMobileBodyText">
                    <h3>{this.title}</h3>
                    <p>{this.description}</p>
                </div>
            </div>
        </div>
    }

    sectionFootMobile() {
        return <FootMobileSection />
    }

    render() {
        let browserPage = <div className="officialRevPage">
            {this.sectionFly()}
            {this.sectionBrowserChildren()}
            {this.sectionFoot()}
        </div>
        let mobilePage = <div className="officialRevPageMobile">
            {this.sectionFlyMobile()}
            {this.mobileChildren}
            {this.sectionFootMobile()}
        </div>
        return <div className="officialRevPageFrame">
            <BrowserView>
                {browserPage}
            </BrowserView>
            <MobileView>
                {mobilePage}
            </MobileView>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialPageReverseFrame);