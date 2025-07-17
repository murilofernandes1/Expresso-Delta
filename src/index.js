import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import App from './App';

import Coleta from './routes/Coleta';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Coleta" element={<Coleta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);