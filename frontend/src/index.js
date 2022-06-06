import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import './bootstrap.min.css'
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './features/basketSlice';
import Detail from './Detail';
import Sign from './Sign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cart/:id" element={<Detail/>} />
          <Route path="/Welcome" element={<Welcome/>} />
          <Route path="/Sign" element={<Sign/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
