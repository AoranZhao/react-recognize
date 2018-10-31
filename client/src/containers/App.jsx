'use strict';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    browserHistory,
    Redirect
} from 'react-router-dom';

import PrivateRoute from '../modules/PrivateRoute.jsx';
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';

import HeadPage from './HeadPage.jsx';
import TechnologyPage from './technology/TechnologyPage.jsx';
import SolutionPage from './SolutionPage.jsx';
import AboutPage from './AboutPage.jsx';
import CareerPage from './CareerPage.jsx';
import RequestDemoPage from './RequestDemoPage.jsx';
import EducationPage from './education/EducationPage.jsx';
import NewretailPage from './newretail/NewretailPage.jsx';
import ProductsPage from './products/ProductPage.jsx';

import './App.scss';

const App = () => {
    return (
        <Router history={browserHistory} >
            <div style={{ width: '100%' }}>
                <Route exact path="/" component={HeadPage} />
                <Route path="/technology" component={TechnologyPage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/education" component={EducationPage} />
                <Route path="/newretail" component={NewretailPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/career" component={CareerPage} />
                <Route path="/requestdemo" component={RequestDemoPage} />
                <Route path="/admin" render={() => (
                    <Redirect to="/dashboard" />
                )} />
                <PrivateRoute path="/dashboard" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </div>
        </Router>
    )
}

export default App;