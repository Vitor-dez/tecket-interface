import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SuccessScreen } from './containers/screenn'; 
import GlobalStyle from './styles/globalStyles';
import Login from './containers/Login'; 
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer  autoClose={2000} theme="colored" />
    <Router>
      <Routes>
     
        <Route path="tecket-interface" element={<Login />} />

        <Route path="tecket-interface/sucesso" element={<SuccessScreen />} />

      </Routes>
    </Router>
    
    <GlobalStyle />
   
  </React.StrictMode>
);