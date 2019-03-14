import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux / React-Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux-thunk
import thunk from 'redux-thunk';

// Reducer
import reducers from './Reducer/RootReducer';

// Redux Store
let store = createStore (reducers, applyMiddleware(thunk))

ReactDOM.render(
    // Redux: Store provider
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
