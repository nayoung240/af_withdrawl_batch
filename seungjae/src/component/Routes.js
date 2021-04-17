import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import main_menu from './with_sandwich/main_menu'
import SandwichLen from './with_sandwich/SandwichLen'

const Routes = () => {
    return (
    	<Router>
          <Route path="/sandwich/main" component={main_menu} />
          <Route path="/sandwich/len" component={SandwichLen} />
        </Router>
    );
};

export default Routes;