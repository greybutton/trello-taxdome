import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './containers/Main';
import Board from './containers/Board';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/boards/:id" component={Board} />
    </Switch>
  </div>
);

export default App;
