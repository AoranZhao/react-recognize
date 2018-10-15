'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Topbar from './Topbar.jsx';
import TopbarMobile from './TopbarMobile.jsx';

import { } from '../actions';

import './OfficialPageFrame.scss';
import profileImage from '../static/images/kangourou.jpeg';
import alIcon from '../static/images/angellist-icon.png';
import cbIcon from '../static/images/cb-icon.png';
import inIcon from '../static/images/linkedin-icon.png';
import wechatIcon from '../static/images/wechat-icon.jpg';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({

})

class OfficialPageFrame extends React.Component {
    constructor(props) {
        super(props);
        this.browserChildren = props.browserChildren || [];
        this.mobileChildren = props.mobileChildren || [];
        this.highlightTitle = props.highlightTitle;

        this.sectionFly = this.sectionFly.bind(this);
        this.sectionFoot = this.sectionFoot.bind(this);

        this.sectionFlyMobile = this.sectionFlyMobile.bind(this);
        this.sectionFootMobile = this.sectionFootMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionFly() {
        return <div className="sectionFly">
            <Topbar highlight={this.highlightTitle} />
            {/* <TopbarMobile style={{ display: 'block' }} /> */}
            <div className="sectionFlyBody">
                <div className="sectionFlyBodyText">
                    <h3>Customize artificial intelligence with the human touch</h3>
                    <p>Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be taught, trusted, and operated by all generation.</p>
                </div>
                <img className="profile" src={profileImage} />
            </div>
        </div>
    }

    sectionFoot() {
        return <div className="sectionFoot">
            <div className="contact">
                <div className="contact_us">
                    <p>U.S. Office:</p>
                    <p>59 Brainerd Rd, Allston02134, MA</p>
                    <p>+1 4018370759</p>
                    <p>contact@learnable.ai</p>
                </div>
                <div className="contact_cn">
                    <p>China Office:</p>
                    <p>辽宁省大连市高新技术产业园区火炬路32A号B座1904室</p>
                    <p>+86 18616763883</p>
                    <p>contact@learnable.ai</p>
                </div>
                <div className="contact_media">
                    <img src={wechatIcon} />
                    <img src={cbIcon} />
                    <img src={alIcon} />
                    <img src={inIcon} />
                </div>
            </div>
            <div className="declare">
                <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
            </div>
        </div>
    }

    sectionFlyMobile() {
        return <div className="sectionFlyMobile">
            <TopbarMobile className="sectionTopbarMobile" />
            <Topbar className="sectionTopbar" highlight={this.highlightTitle} />
            <div className="sectionFlyMobileBody">
                <div className="sectionFlyMobileBodyText">
                    <h3>Customize artificial intelligence with the human touch</h3>
                    <p>Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be taught, trusted, and operated by all generation.</p>
                </div>
                {/* <img className="profile" src={profileImage} /> */}
            </div>
        </div>
    }

    sectionFootMobile() {
        return <div className="sectionFootMobile">
            <div className="contact">
                <div className="contact_us">
                    <p>U.S. Office:</p>
                    <p>59 Brainerd Rd, Allston02134, MA</p>
                    <p>+1 4018370759</p>
                    <p>contact@learnable.ai</p>
                </div>
                <div className="contact_cn">
                    <p>China Office:</p>
                    <p>辽宁省大连市高新技术产业园区火炬路32A号B座1904室</p>
                    <p>+86 18616763883</p>
                    <p>contact@learnable.ai</p>
                </div>
                <div className="contact_media">
                    <img src={wechatIcon} />
                    <img src={cbIcon} />
                    <img src={alIcon} />
                    <img src={inIcon} />
                </div>
            </div>
            <div className="declare">
                <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
            </div>
        </div>
    }

    render() {
        let browserPage = <div className="officialPage">
            {this.sectionFly()}
            {this.browserChildren}
            {this.sectionFoot()}
        </div>;
        let mobilePage = <div className="officialPageMobile">
            {this.sectionFlyMobile()}
            {this.mobileChildren}
            {this.sectionFootMobile()}
        </div>
        return <div className="officialPageFrame">
            <BrowserView>
                {browserPage}
            </BrowserView>
            <MobileView>
                {mobilePage}
            </MobileView>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialPageFrame);