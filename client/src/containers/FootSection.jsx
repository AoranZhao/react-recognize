'use strict';

import React from 'react';

import wechatIcon from '../static/images/wechat_icon.png';
import linkedIcon from '../static/images/linkedin_icon.png';
import qrCode from '../static/images/qr.jpg';
import logoRev from '../static/images/logo_large_white.png';

import './FootSection.scss';

class FootSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionFoot = this.sectionFoot.bind(this);
    }

    sectionFoot() {
        return <div className="sectionFoot">
            <div className="sectionFootInfo">
                <div className="contact">
                    <p>contact@learnable.ai</p>
                    <p>59 Brainerd Rd., Allston, MA 02134</p>
                    <p>(+1)401-837-0759</p>
                    <p>(+86)18616763883</p>
                </div>
                <div className="media">
                    <div className="wechat">
                        <a href="">
                            <img className="media-icon" src={wechatIcon} />
                        </a>
                        <div className="hidden">
                            <img src={qrCode} />
                        </div>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/learnable-ai/">
                            <img className="media-icon" src={linkedIcon} />
                        </a>
                    </div>
                </div>
                <div className="declare">
                    <a href=""><p>Privacy Statement</p></a>
                    <p>&copy; 2018 Learnable, Inc. All rights reserved.</p>
                </div>
            </div>
            <div className="sectionFootLogo">
                <img src={logoRev} />
            </div>
        </div>
    }

    render() {
        return this.sectionFoot();
    }
}

export default FootSection;