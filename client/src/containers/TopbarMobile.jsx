'use strict';

import React from 'react';

import menuIconRev from '../static/images/menu-icon-white.png';
import menuIcon from '../static/images/menu-icon-gray.png';

import Sidebar from 'react-sidebar';
import TopbarMobileBtn from '../components/TopbarMobileBtn.jsx';
import TopbarBtn from '../components/TopbarBtn.jsx';

import logoImage from '../static/images/logo_large_purple.png';
import logoImageRev from '../static/images/logo_large_white.png';

import './TopbarMobile.scss';

class TopbarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.siderbarOpen = this.siderbarOpen.bind(this);
        this.sidebarContent = this.sidebarContent.bind(this);

        this.highlightTitle = props.highlight;
        this.isRev = props.isRev || false;

        this.renderTopbarSmall = this.renderTopbarSmall.bind(this);
        this.renderTopbarLarge = this.renderTopbarLarge.bind(this);
    }

    siderbarOpen(open) {
        this.setState({ open: open });
    }

    sidebarContent() {
        return <div onScroll={e => {
            e.stopPropagation();
        }}>
            <TopbarMobileBtn click={() => { this.siderbarOpen(false); }} to="/" text="Home" />
            <TopbarMobileBtn click={() => { this.siderbarOpen(false); }} to="/technology" text="Technology" />
            <TopbarMobileBtn click={() => { this.siderbarOpen(false); }} text="Solution"
                subSelections={[
                    { text: 'Education', to: '/education' },
                    { text: 'New Retail', to: '/newretail' },
                    { text: 'Other', to: '/products' }
                ]} />
            <TopbarMobileBtn click={() => { }} text="About"
                subSelections={[
                    { text: 'About Us', to: '/about' },
                    { text: 'Join Us', to: '/career' }
                ]} />
            <TopbarMobileBtn click={() => { }} to="/requestdemo" text="Request Demo" />
        </div>
    }

    renderTopbarLarge() {
        return <div className="sectionTopbarLarge">
            <a href="/">
                <img src={this.isRev ? logoImageRev : logoImage} className="logo" />
            </a>
            <div className="selection">
                <TopbarBtn text="Home" isRev={this.isRev} isHighlight={this.highlightTitle == "Home" ? true : false} to="/" />
                <TopbarBtn text="Technology" isRev={this.isRev} isHighlight={this.highlightTitle == "Technology" ? true : false} to="/technology" />
                <TopbarBtn text="Products" isRev={this.isRev} isHighlight={this.highlightTitle == "Products" ? true : false}
                    subSelections={[
                        { text: 'Education', to: '/education' },
                        { text: 'New Retail', to: '/newretail' },
                        { text: 'Other', to: '/products' }
                    ]} />
                <TopbarBtn text="About" isRev={this.isRev} isHighlight={this.highlightTitle == "About" ? true : false}
                    subSelections={[
                        { text: 'About Us', to: '/about' },
                        { text: 'Join Us', to: '/career' }
                    ]} />
                <TopbarBtn text="Demo" isRev={this.isRev} isHighlight={this.highlightTitle == "Demo" ? true : false} to="/requestdemo" />
            </div>
        </div>
    }

    renderTopbarSmall() {
        return <div className="sectionTopbarSmall">
            <div className="sectionTopbarMobileSidebar">
                <Sidebar
                    sidebar={this.sidebarContent()}
                    open={this.state.open}
                    onSetOpen={this.siderbarOpen}
                    styles={{ sidebar: { background: 'while' } }}
                    sidebarClassName="sidebarContent">
                    <img src={this.isRev ? menuIconRev : menuIcon} onClick={e => { this.siderbarOpen(true); }} style={{ cursor: 'pointer' }} />
                </Sidebar>
            </div>
            <img src={this.isRev ? logoImageRev : logoImage} className="logo" />
        </div>
    }

    render() {
        return <div className="sectionTopbarFrame">
            {this.renderTopbarSmall()}
            {this.renderTopbarLarge()}
        </div>
    }
}

export default TopbarMobile;