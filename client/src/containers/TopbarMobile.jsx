'use strict';

import React from 'react';

import logoImage from '../static/images/Learnable_logo.png';
import sidebarBtn from '../static/images/sidebarBtn.png';

import Sidebar from 'react-sidebar';
import TopbarMobileBtn from '../components/TopbarMobileBtn.jsx';

import './TopbarMobile.scss';

class TopbarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.siderbarOpen = this.siderbarOpen.bind(this);
        this.sidebarContent = this.sidebarContent.bind(this);
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
            <TopbarMobileBtn click={() => { this.siderbarOpen(false); }} to="/solution" text="Solution"
                subSelections={[
                    { text: 'Education', to: '/solution' },
                    { text: 'New Retail', to: '/solution' },
                    { text: 'Other', to: '/solution' }
                ]} />
            <TopbarMobileBtn click={() => { }} to="/about" text="About" />
            <TopbarMobileBtn click={() => { }} to="/career" text="Career" />
        </div>
    }

    render() {
        return <div className="sectionTopbarMobile">
            <div className="sectionTopbarMobileSidebar">
                <Sidebar
                    sidebar={this.sidebarContent()}
                    open={this.state.open}
                    onSetOpen={this.siderbarOpen}
                    styles={{ sidebar: { background: 'while' } }}
                    sidebarClassName="sidebarContent">
                    <img src={sidebarBtn} onClick={e => { this.siderbarOpen(true); }} style={{ cursor: 'pointer' }} />
                </Sidebar>
            </div>
            <img src={logoImage} className="logo" />
        </div>
    }
}

export default TopbarMobile;