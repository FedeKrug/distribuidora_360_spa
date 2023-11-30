import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { ProductsList } from './components/ProductsList'
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar />
      {/* <Navbar2 /> */}
      <AppRouter />
      <WhatsappFloatingButton />
    </BrowserRouter>
  </>
  )
}

export default App