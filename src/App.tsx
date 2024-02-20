import { AppRouter } from './router/AppRouter'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='flex justify-center'>
          <Navbar />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
