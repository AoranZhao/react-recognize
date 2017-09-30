'use strict';

import React from 'react';
import TabEntry from './TabEntry.jsx';
import LogoutButton from '../containers/LogoutButton.jsx';

import './SideBar.scss'

let SideBar = ({
    entries,
    base
}) => (
    <div className="sidebar">
        <div className="sidebar_item">
            <TabEntry text="Home" to="/" />
        </div>
        {entries.map((entry, index) => (
            <div key={index} className="sidebar_item">
                <TabEntry text={entry.text} to={`${base}${entry.url}`} />
            </div>
        ))}
        <div className="frame_logout_btn">
            <LogoutButton />
        </div>
    </div>
)

export default SideBar;