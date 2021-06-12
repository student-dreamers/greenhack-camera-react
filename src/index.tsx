import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import store from "./redux/store";
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
