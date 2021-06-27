import React from 'react';
import '../css/index.css';
import { Route, Switch } from 'react-router-dom';
import { Main, Menu } from '../pages';

const App = () => {
  return (
      <div className="container">
          <Route exact path="/" component={Main}/>
          <Switch>
            <Route path="/menu" component={Menu}/>
          </Switch>
      </div>
  );
}

export default App;
