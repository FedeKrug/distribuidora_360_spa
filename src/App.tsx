import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'
import { ThemeProvider } from './context/ThemeContext'
import { PaginationProvider } from './context/PaginationContext'

const App = () => {

  return (<>
    <BrowserRouter>

      <PaginationProvider>
        <ThemeProvider>
          <Navbar />
          {/* <Navbar2 /> */}
          <AppRouter />
          <WhatsappFloatingButton />
          <Footer />
        </ThemeProvider>
      </PaginationProvider>
    </BrowserRouter>
  </>
  )
}

export default App