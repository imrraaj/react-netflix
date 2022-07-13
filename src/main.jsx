import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CustomContextProvider from './context/authContext'
import { BrowserRouter } from "react-router-dom"
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomContextProvider>
  </React.StrictMode>
)
