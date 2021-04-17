import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

const listener = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>, 
        document.getElementById('root')
    );
}

store.subscribe(listener);
listener();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// registerServiceWorker();