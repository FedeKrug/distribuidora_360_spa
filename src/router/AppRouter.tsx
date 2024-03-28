import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { Error404Page } from '../components/pages/Error404Page'
import { AboutPage } from '../components/pages/AboutPage'
import { ContactPage } from '../components/pages/ContactPage'
import { StorePage } from '../components/pages/StorePage'
import { SeachProductsPage } from '../components/pages/SeachProductsPage'
import { AdminPage } from '../components/pages/AdminPage'
import { ProductPage } from '../components/pages/ProductPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sobre-nosotros' element={<AboutPage />} />
            <Route path='/contacto' element={<ContactPage />} />
            <Route path='/tienda' element={<StorePage />} />
            {/* <Route path='/categoria/:categoriaId' element={<div>Categorias</div>} /> */}
            <Route path='/buscar-productos' element={<SeachProductsPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='buscar-productos/producto/:productId' element={<ProductPage />} />
            <Route path='/404' element={<Error404Page />} />
            <Route path='/*' element={<Error404Page />} />
        </Routes>
    )
}


