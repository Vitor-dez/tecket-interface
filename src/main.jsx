import React from 'react'
import ReactDOM from 'react-dom/client'
/*import { Login } from './containers/Login'    pagina de cadastro    */
import {SuccesScreen} from './/containers/screenn'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <SuccesScreen></SuccesScreen>
   <ToastContainer></ToastContainer>
   <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
)
