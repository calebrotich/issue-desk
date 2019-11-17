import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Issues from './components/issues/Issues';
import CreateIssue from './components/issues/CreateIssue';
import CreateUser from './components/users/CreateUser';
import CreateCustomer from './components/customers/CreateCustomer';
import './css/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/issues/create" component={CreateIssue} />
    <Route exact path="/issues/:status" component={Issues} />
    <Route exact path="/users/create" component={CreateUser} />
    <Route exact path="/customers/create" component={CreateCustomer} />

  </Switch>
);

export default App;
