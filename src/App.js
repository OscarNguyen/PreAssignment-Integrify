import React from 'react';
import Homepage from './components/Homepage/Homepage';
import User from './components/User/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
