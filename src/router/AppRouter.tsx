import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'
import { Error404Page } from '../pages/Error404Page'
import { ContactPage } from '../pages/ContactPage'
import { FAQScreen } from '../pages/FAQScreen'



export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/contacto' element={<ContactPage />} />
            <Route path='/preguntas-frecuentes' element={<FAQScreen />} />



            <Route path='/*' element={<Error404Page />} />
        </Routes>

    )
}
