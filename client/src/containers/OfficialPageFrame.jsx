'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Topbar from './Topbar.jsx';
import TopbarMobile from './TopbarMobile.jsx';

import { } from '../actions';

import './OfficialPageFrame.scss';
import profileImage from '../static/images/face_large.png';

import FootSection from './FootSection.jsx';
import FootMobileSection from './FootMobileSection.jsx';

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
        this.sectionBrowserChildren = this.sectionBrowserChildren.bind(this);
        this.sectionFoot = this.sectionFoot.bind(this);

        this.sectionFlyMobile = this.sectionFlyMobile.bind(this);
        this.sectionFootMobile = this.sectionFootMobile.bind(this);
    }

    componentWillMount() {

    }

    sectionFly() {
        return <div className="sectionFlyFrame">
            <div className="sectionFly">
                <Topbar highlight={this.highlightTitle} />
                <div className="sectionFlyBody">
                    <div className="sectionFlyBodyText">
                        <h3>Customize artificial intelligence with the human touch</h3>
                        <p>Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be taught, trusted, and operated by all generation.</p>
                    </div>
                    <img className="profile" src={profileImage} />
                </div>
            </div>
        </div>
    }

    sectionBrowserChildren() {
        return <div className="sectionBrowserChildrenFrame">
            {this.browserChildren}
        </div>
    }

    sectionFoot() {
        return <div className="sectionFootFrame">
            <div className="sectionFootFrameInside">
                <FootSection />
            </div>
        </div>
    }

    sectionFlyMobile() {
        return <div className="sectionFlyMobile">
            <TopbarMobile highlight={this.highlightTitle} />
            <div className="sectionFlyMobileBodySmall">
                <div className="sectionFlyMobileBodyText">
                    <h3>Customize artificial intelligence with the human touch</h3>
                    <p>Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be taught, trusted, and operated by all generation.</p>
                </div>
            </div>
            <div className="sectionFlyMobileBodyLarge">
                <div className="sectionFlyMobileBodyText">
                    <h3>Customize artificial intelligence with the human touch</h3>
                    <p>Learnable optimizes the manual process with our human-centered Artificial Intelligence technologies that can be taught, trusted, and operated by all generation.</p>
                </div>
                <img className="profile" src={profileImage} />
            </div>
        </div>
    }

    sectionFootMobile() {
        return <FootMobileSection />
    }

    render() {
        let browserPage = <div className="officialPage">
            {this.sectionFly()}
            {this.sectionBrowserChildren()}
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