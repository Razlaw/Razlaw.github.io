import "./semantic-ui-min-wo-google.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/roboto-slab/700.css"
import "@fontsource/roboto-slab/400.css"
import "@fontsource/pt-serif";
import "@fontsource/lato/700.css"
import "@fontsource/lato/400.css"

import React from 'react';
import ReactDOM from 'react-dom';

import {CookiesProvider} from 'react-cookie';
import {HashRouter} from "react-router-dom";

import App from './App';

ReactDOM.render(
    <CookiesProvider>
        <HashRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </HashRouter>
    </CookiesProvider>,
    document.getElementById('root')
);
