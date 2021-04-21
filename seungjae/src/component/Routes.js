import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from './with_sandwich/MainMenu'
import SandwichLen from './with_sandwich/SandwichLen'

const Routes = () => {
    return (
    	<Router>
          <Route path="/sandwich/main" component={MainMenu} />
          <Route path="/sandwich/len" component={SandwichLen} />
        </Router>
    );
};

export default Routes;