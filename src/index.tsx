import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Greeting from './components/Greeting';
import LandingPage from './mainpage/LandingPage';
import ErrorPage from './components/Until/ErrorPage';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <BrowserRouter>
     <LandingPage/>
    </BrowserRouter>
    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
