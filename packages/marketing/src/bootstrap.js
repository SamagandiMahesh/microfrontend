// Mount func to start up the app
// if we are in dev and in isolation call mount immediately
// we are running through container & we export the mount func


import React from  'react';
import ReactDOM from 'react-dom';
import App from  './App';


const mount = (el) => {
    ReactDOM.render(
       <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if(devRoot) {
        mount(devRoot)
    }
}

export {mount}