'use strict';

import React from 'react';
import TabEntry from './TabEntry.jsx';
import LogoutButton from '../containers/LogoutButton.jsx';

let SideBar = ({
    entries,
    base
}) => (
    <div>
        <div>
            <TabEntry text="Home" to="/" />
        </div>
        {entries.map((entry, index) => (
            <div key={index}>
                <TabEntry text={entry.text} to={`${base}${entry.url}`} />
            </div>
        ))}
        <LogoutButton />
    </div>
)

export default SideBar;