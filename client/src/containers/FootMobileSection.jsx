'use strict';

import React from 'react';

import wechatIcon from '../static/images/wechat_icon.png';
import linkedIcon from '../static/images/linkedin_icon.png';
import qrCode from '../static/images/qr.jpg';
import logoRev from '../static/images/logo_large_white.png';

import './FootMobileSection.scss';

class FootMobileSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showQR: false
        }

        this.sectionFootSmall = this.sectionFootSmall.bind(this);
        this.sectionFootLarge = this.sectionFootLarge.bind(this);
    }

    sectionFootLarge() {
        return <div className="sectionFootMobileLarge">
            <div className="sectionFootMobileInfo">
                <div className="contact">
                    <p>contact@learnable.ai</p>
                    <p>59 Brainerd Rd., Allston, MA 02134</p>
                    <p>(+1)401-837-0759</p>
                    <p>(+86)18616763883</p>
                </div>
                <div className="media">
                    <div className="wechat">
                        <a href="" onClick={e => {
                            e.preventDefault();
                            this.setState({ showQR: !this.state.showQR })
                        }}>
                            <img className="media-icon" src={wechatIcon} />
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/learnable-ai/">
                            <img className="media-icon" src={linkedIcon} />
                        </a>
                    </div>
                </div>
                <div className="media-hidden" style={this.state.showQR ? { display: 'block' } : { display: 'none' }}>
                    <img src={qrCode} />
                </div>
                <div className="declare">
                    <a href=""><p>Privacy Statement</p></a>
                    <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
                </div>
            </div>
            <div className="sectionFootMobileLogo">
                <img src={logoRev} />
            </div>
        </div>
    }

    sectionFootSmall() {
        return <div className="sectionFootMobileSmall">
            <div className="sectionFootMobileInfo">
                <div className="contact">
                    <p>contact@learnable.ai</p>
                    <p>59 Brainerd Rd., Allston, MA 02134</p>
                    <p>(+1)401-837-0759</p>
                    <p>(+86)18616763883</p>
                </div>
                <div className="media">
                    <div className="wechat">
                        <a href="" onClick={e => {
                            e.preventDefault();
                            this.setState({ showQR: !this.state.showQR })
                        }}>
                            <img className="media-icon" src={wechatIcon} />
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/learnable-ai/">
                            <img className="media-icon" src={linkedIcon} />
                        </a>
                    </div>
                </div>
                <div className="media-hidden" style={this.state.showQR ? { display: 'block' } : { display: 'none' }}>
                    <img src={qrCode} />
                </div>
                <div className="declare">
                    <a href=""><p>Privacy Statement</p></a>
                    <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    }

    render() {
        return <div className="sectionFootMobileFrame">
            {this.sectionFootLarge()}
            {this.sectionFootSmall()}
        </div>
    }
}

export default FootMobileSection;