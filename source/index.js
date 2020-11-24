// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider} from "react-redux";

// Instruments
import './theme/init';
import { store } from './init/store';

// App
import App from './navigation/App';
import fb from 'firebase/app'
import 'firebase/firestore'
fb.initializeApp({
    apiKey: 'AIzaSyB5ctBJ5KydHRZKZ6xrSmETB46QSaWJZBM',
    databaseURL: 'https://vue-spa-ed108.firebaseio.com'
})

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('app'));
