'use strict';

import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar.jsx';
import GreetingPage from './GreetingPage.jsx';
import UserPage from './UserPage.jsx';
import AdminPage from './AdminPage.jsx';

import './HomePage.scss';

const mapStateToProps = state => {
    var obj = {};
    obj.entries = (typeof state.auth.data === 'undefined' || state.auth.data.type !== 'admin') ? [] : [{ text: 'Admin', url: '/admin' }];
    return obj;
}

let HomePage = ({
    match,
    entries
}) => {
    return <div className="homeFrame" style={{ width: '100%' }}>
        <SideBar entries={entries} base={match.url} />
        <Route exact path={`${match.url}`} component={GreetingPage} />
        <Route path={`${match.url}/admin`} component={AdminPage} />
    </div>
}

HomePage = connect(mapStateToProps)(HomePage);

export default HomePage;