import { AppRouter } from './router/AppRouter'
import './App.css'
import { WhatsappButton } from './components/shared/WhatsappButton/WhatsappButton'


const App = () => {
  return (
    <>
      <AppRouter />
      <WhatsappButton />
    </>
  )
}

export default App
