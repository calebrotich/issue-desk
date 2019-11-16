import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';
import CreateIssue from './components/issues/CreateIssue';
import './css/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/issues" component={Issues} />
    <Route exact path="/issues/create" component={CreateIssue} />
  </Switch>
);

export default App;
