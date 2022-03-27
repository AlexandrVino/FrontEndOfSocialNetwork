import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const renderPage = (state, addPost) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}