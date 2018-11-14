'use strict';

import React from 'react';

import SidebarBtn from '../sidebarBtn/SidebarBtn.jsx';
import sidebarBtnLogo from '../../static/images/menu-icon-gray.png';
import sidebarBtnLogoRev from '../../static/images/menu-icon-white.png';

import logoImage from '../../static/images/logo_large_purple.png';
import logoImageRev from '../../static/images/logo_large_white.png';

import './TopbarMobile.scss';

class TopbarMobile extends React.Component {
    constructor(props) {
        super(props);

        this.isRev = props.isRev || false;

        this.generateComponent = this.generateComponent.bind(this);

    }

    componentWillMount() {

    }

    generateComponent() {
        if (this.isRev) {
            return <div className="topbarMobileFrame">
                <div className="topbarMobileMenuBtn">
                    <SidebarBtn logoSrc={sidebarBtnLogoRev} />
                </div>
                <div className="topbarMobileLogo">
                    <a href="/">
                        <img src={logoImageRev} />
                    </a>
                </div>
            </div>
        } else {
            return <div className="topbarMobileFrame">
                <div className="topbarMobileMenuBtn">
                    <SidebarBtn logoSrc={sidebarBtnLogo} />
                </div>
                <div className="topbarMobileLogo">
                    <a href="/">
                        <img src={logoImage} />
                    </a>
                </div>
            </div>
        }
    }

    render() {
        return this.generateComponent();
    }
}

export default TopbarMobile;