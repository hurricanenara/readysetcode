import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'; //interceptors

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`; // half measure - instances if you have more than one base URL
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// interceptor/middleware
// let requestInterceptor = 
axios.interceptors.request.use(request => {
    console.log(request);
    return request; // you must return this otherwise you will block the request
}, error => {
    console.log(error);
    return Promise.reject(error); // will fire if error with request like internet connectivity issue
});

// axios.interceptors.request.eject(requestInterceptor);

// let responseInterceptor = 
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error); // will fire when request is made and error was received as response
});
// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
