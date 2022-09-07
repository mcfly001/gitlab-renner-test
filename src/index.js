/*
 * @Description:
 * @Author: 郑泳健
 * @Date: 2022-05-16 17:55:09
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-05-19 17:19:14
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(           document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
                                                 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
