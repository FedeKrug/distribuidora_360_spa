import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './components/Navbar.tsx'
import { Footer } from './components/Footer.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='flex justify-center flex-col'>
        <Navbar />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
