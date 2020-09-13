import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Pages */
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

/* UserPageComponents */
import Shorten from './componentsUser/Shorten/Shorten';
import List from './componentsUser/List/List';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Route path="/cadastro" exact={true} component={RegisterPage} />
            <Route path="/user/shorten" exact={true} component={Shorten} />
            <Route path="/user/list" exact={true} component={List} />
        </Switch>
    </ BrowserRouter>
  )
}

export default App;
