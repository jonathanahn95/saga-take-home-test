import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/homepage_container.js';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage}/>
    </Switch>
  </div>
);
export default App;