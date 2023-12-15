import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'
import { ThemeProvider } from './context/ThemeContext'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  return (<>
    <Provider store={store}>

      <PersistGate loading={<h4>Cargando</h4>} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider>
            <Navbar />
            <AppRouter />
            <WhatsappFloatingButton />
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
  )
}

export default App