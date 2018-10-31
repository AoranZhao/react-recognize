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
        this.sectionFoot = this.sectionFoot.bind(this);
        this.sectionFlyMobile = this.sectionFlyMobile.bind(this);
        this.sectionFootMobile = this.sectionFootMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionFly() {
        return <div className="sectionFlyRev">
            <Topbar highlight={this.highlightTitle} isRev={true} />
            <div className="sectionFlyRevBody">
                <div className="sectionFlyRevBodyText">
                    <h3>{this.title}</h3>
                    <p>{this.description}</p>
                </div>
            </div>
        </div>
    }

    sectionFoot() {
        return <FootSection />
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
            {this.browserChildren}
            {this.sectionFoot()}
        </div>
        let mobilePage = <div className="officialRevPageMobile">
            {this.sectionFlyMobile()}
            {this.mobileChildren}
            {this.sectionFootMobile()}
        </div>
        return <div className="officialRevPageFrame">
            <BrowserView>
                {mobilePage}
            </BrowserView>
            <MobileView>
                {browserPage}
            </MobileView>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialPageReverseFrame);