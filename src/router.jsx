import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path='/' />
        <Route path='/projektjeink' />
        <Route path='/egyszazalek' />
        <Route path='/projekt' />
        <Route path='/uvegzseb' />
        <Route path='/kapcsolat' />
        <Route path='/adatvedelem' />
        <Route /> // No-match case
    </Switch>
);