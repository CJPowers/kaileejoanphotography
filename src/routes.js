import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomeLandingPage/HomePage';
import Weddings from './components/Weddings/Weddings';
import Engagements from './components/Engagements/Engagements';
import Family from './components/Family/Family';
import Portraits from './components/Portraits/Portraits';
import Contact from './components/Contact/Contact';
import Bio from './components/Bio/Bio';
import MainContent from './components/HomeLandingPage/MainContent';

export default (
    <Route path="/" component={HomePage}>
        <IndexRoute component={MainContent} />
        <Route path="/weddings" component={Weddings} />
        <Route path="/engagements" component={Engagements} />
        <Route path="/family" component={Family} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/contact" component={Contact} />
        <Route path='/bio' component={Bio} />
    </Route>
);
