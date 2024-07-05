import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SuccessScreen } from './containers/screenn'; 
import GlobalStyle from './styles/globalStyles';
import Login from './containers/Login'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
     
        <Route path="tecket-interface" element={<Login />} />

        <Route path="tecket-interface/sucesso" element={<SuccessScreen />} />

      </Routes>
    </Router>
    <GlobalStyle />
  </React.StrictMode>
);