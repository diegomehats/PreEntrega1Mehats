import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, ThemeProvider} from '@mui/material'


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#90603C',
    },
    secondary: {
      main: '#0023f5',
    },
    text: {
      primary: '#90603C',
      disabled: 'rgba(0,0,0,0)',
    },
    background: {
      default: '#E5DAC3',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
         <App />
    </ThemeProvider>
  </React.StrictMode>,
)
