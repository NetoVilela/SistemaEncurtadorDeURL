import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* Pages */
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

/* UserPageComponents */
import Shorten from './componentsUser/Shorten/Shorten';
import List from './componentsUser/List/List';
import LogadoPage from './pages/LogadoPage';
import DeslogadoPage from './pages/DeslogadoPage';

function App() {

  const logado = localStorage.getItem("logado")==="true";
  if (logado) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/deslogado" exact component={DeslogadoPage} />
          <Route path="/logado" exact component={LogadoPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/cadastro" exact component={RegisterPage} />
          <Route path="/user/shorten" exact component={Shorten} />
          <Route path="/user/list/:id" exact component={List} />
        </Switch>
      </ BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/deslogado" exact component={DeslogadoPage} />
          <Route path="/logado" exact component={LogadoPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/cadastro" exact component={RegisterPage} />
        </Switch>
      </ BrowserRouter>
    )
  }


}

export default App;
