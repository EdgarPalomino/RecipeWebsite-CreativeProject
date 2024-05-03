import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
