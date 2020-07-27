import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/homepage.js';
import EditForm from './Edit-Form/edit_form_container.js';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/edit-post-:id" component={EditForm}/>
    </Switch>
  </div>
);
export default App;
