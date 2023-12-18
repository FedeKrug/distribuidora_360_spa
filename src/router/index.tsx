import { Page } from './types'
import { HomeScreen } from '../pages/HomeScreen'
import { ContactPage } from '../pages/ContactPage'
import { LoginPage } from '../pages/LoginPage'
import { AboutPage } from '../pages/AboutPage'
import { FAQScreen } from '../pages/FAQScreen'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'

export const pages: Page[] = [
    { path: '/', Component: <HomeScreen /> },
    { path: '/contacto', Component: <ContactPage /> },
    { path: '/sobre-nosotros', Component: <AboutPage /> },
    { path: '/preguntas-frecuentes', Component: <FAQScreen /> },
]

export const publicPages: Page[] = [
    { path: '/', Component: <LoginPage /> },
    { path: '/registro', Component: <RegisterPage /> },
    { path: '/recuperar-clave', Component: <ForgotPasswordPage /> },
    { path: '/preguntas-frecuentes', Component: <FAQScreen /> },
    { path: '/contacto', Component: <ContactPage /> },
    { path: '/sobre-nosotros', Component: <AboutPage /> },
]