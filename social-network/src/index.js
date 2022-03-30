import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/state";

let renderPage = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} renderPage={renderPage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderPage()

reportWebVitals();
