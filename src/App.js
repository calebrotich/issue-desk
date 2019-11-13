import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './css/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App;
