'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import { } from '../actions';

import './OfficialPageReverseFrame.scss';

import FootSection from './FootSection.jsx';
import FootMobileSection from './FootMobileSection.jsx';

// test Topbar
import Topbar from '../components/topbar/Topbar.jsx';
import TopbarMobile from '../components/topbar/TopbarMobile.jsx';
import FloatBtn from '../components/floatBtn/FloatBtn.jsx';
import RequestDemoSection from './requestdemo/RequestDemoSection.jsx';
// end test

// banner animation
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import '../assets/rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
// topbar animation
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';

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

        this.state = {
            fixNav: false,
            loadBanner: false
        }

        this.subBtns = [{ text: "Home", to: "/" },
        { text: "Technology", to: "/technology" },
        {
            text: "Product", subBtns: [
                {
                    text: "Education", to: "/education", subBtns: [{
                        text: "Accessories", to: "/aieducationalaccessories"
                    }, {
                        text: "Classroom", to: "/classroom"
                    }]
                },
                {
                    text: "New Retail", to: "/newretail"
                },
                {
                    text: "Other", to: "#"
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
        window.addEventListener('scroll', (e) => {
            this.setState({ fixNav: document.documentElement.scrollTop > 120 });
        })
    }

    componentDidMount() {
        this.setState({ loadBanner: true });
    }

    sectionFly() {
        let otherBtns = [<FloatBtn key="float1" text="Demo" title="" isRev={true}>
            <RequestDemoSection isRev={true} />
        </FloatBtn>];
        return <div className="sectionFlyRevFrame">
            <div className="sectionFlyRev">
                {/* <Topbar highlight={this.highlightTitle} isRev={true} /> */}
                <div style={this.state.fixNav ? { position: 'fixed', top: 0, width: '100vw', backgroundColor: 'rgb(30, 67, 118)', boxShadow: '0 0 5px black', zIndex: 50 } : { paddingTop: '50px', backgroundColor: 'rgba(30, 67, 118, 0.83)' }}>
                    <Topbar subBtns={this.subBtns} otherBtns={otherBtns} isRev={true} highlightTitle={this.highlightTitle} />
                </div>
                <div className="sectionFlyRevBody">
                    <BannerAnim prefixCls='banner-user' style={this.state.loadBanner ? { height: '300px', transitionDuration: '0.5s' } : { height: '0' }}>
                        <Element
                            prefixCls="banner-user-elem"
                            key="0"
                        >
                            <BgElement
                                key="bg"
                                className="bg"
                                style={{
                                    background: 'rgba(30, 67, 118, 0.83)'
                                }}
                            />
                            <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from', delay: 500, duration: 800 }}>
                                {this.title}
                            </TweenOne>
                            <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 600, duration: 800 }}>
                                {this.description}
                            </TweenOne>
                        </Element>
                    </BannerAnim>
                    {/* <div className="sectionFlyRevBodyText">
                        <h3>{this.title}</h3>
                        <p>{this.description}</p>
                    </div> */}
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