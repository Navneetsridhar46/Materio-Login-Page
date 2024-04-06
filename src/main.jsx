import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min (1).css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='964209744933-8ppdq4qh7v81ufc8s2bhl4g9qt06tvkp.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
