import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import store from "./redux/store";
import App from './App';
import './index.css';

declare global {
    interface Window {
        ikea: any;
    }
}

window.ikea = (s: any) => console.log('index: ', s);

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
