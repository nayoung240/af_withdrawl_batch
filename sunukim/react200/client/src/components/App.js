import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2'

// import '../css/new.css';

class App extends Component {
  render(){
    return(
      <div classNamee="App">
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactRouter2' component={reactRouter2} />
      </div>
    );
  }
}

export default App;