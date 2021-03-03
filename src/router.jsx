import React from 'react';
import { Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Route>
        <Route path='/' />
        <Route path='/projektjeink' />
        <Route path='/egyszazalek' />
        <Route path='/projekt' />
        <Route path='/uvegzseb' />
        <Route path='/kapcsolat' />
        <Route path='/adatvedelem' />
        <Route /> // No-match case
        </Route>
);
