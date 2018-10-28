'use strict';

import React from 'react';

import alIcon from '../static/images/angellist-icon.png';
import cbIcon from '../static/images/cb-icon.png';
import inIcon from '../static/images/linkedin-icon.png';
import wechatIcon from '../static/images/wechat-icon.jpg';

import './FootSection.scss';

class FootSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionFoot = this.sectionFoot.bind(this);
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

    render() {
        return this.sectionFoot();
    }
}

export default FootSection;