import { Page } from './types'
import { HomeScreen } from '../pages/HomeScreen'
import { ContactPage } from '../pages/ContactPage'
import { LoginPage } from '../pages/LoginPage'
import { AboutPage } from '../pages/AboutPage'
import { FAQScreen } from '../pages/FAQScreen'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { Error404Page } from '../pages/Error404Page'
import { AdminPage } from '../pages/AdminPage'
import { BuscadorPage } from '../pages/BuscadorPage'

export const pages: Page[] = [
    { path: '/', Component: <HomeScreen /> },
    { path: '/contacto', Component: <ContactPage /> },
    { path: '/sobre-nosotros', Component: <AboutPage /> },
    { path: '/preguntas-frecuentes', Component: <FAQScreen /> },
    { path: '/admin', Component: <AdminPage /> },
    { path: '/buscador', Component: <BuscadorPage /> },
    { path: '/*', Component: <Error404Page /> },
]

export const publicPages: Page[] = [
    { path: '/', Component: <LoginPage /> },
    { path: '/registro', Component: <RegisterPage /> },
    { path: '/recuperar-clave', Component: <ForgotPasswordPage /> },
    { path: '/preguntas-frecuentes', Component: <FAQScreen /> },
    { path: '/contacto', Component: <ContactPage /> },
    { path: '/sobre-nosotros', Component: <AboutPage /> },
    { path: '/*', Component: <Error404Page /> },
]