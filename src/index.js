import 'semantic-ui-css/semantic.min.css';
import "@fontsource/playfair-display/700.css";
import "@fontsource/roboto-slab/700.css"
import "@fontsource/roboto-slab/400.css"
import "@fontsource/pt-serif";

import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter} from "react-router-dom";

import App from './App';

ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);
