import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/pages/Home';
import Search from './core/pages/Search';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;