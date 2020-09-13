import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Components General */
import SideBar from '../componentsUser/SideBar/SideBar';
import Shorten from '../componentsUser/Shorten/Shorten';
import List from '../componentsUser/List/List';

export default props => {
    return (
        <React.Fragment>
            <SideBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/user/shorten" exact={true} component={Shorten} />
                    <Route path="/user/list" exact={true} component={List} />
                    
                </Switch>
            </ BrowserRouter>
        </React.Fragment>
    )
}