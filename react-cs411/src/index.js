import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="316363094058-0lea28iimm7noqssrh3as176r3vj69pd.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
  </React.StrictMode>
)