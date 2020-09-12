import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Pages */
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Route path="/cadastro" exact={true} component={RegisterPage} />
        </Switch>
    </ BrowserRouter>
  )
}

export default App;
