import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeWrapper } from './context/theme.context.jsx'
// import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <ThemeWrapper>
       <App />
    </ThemeWrapper>
 </BrowserRouter>
  
)
