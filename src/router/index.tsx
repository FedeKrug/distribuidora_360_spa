import React from 'react'
import { Page } from './types'
import { HomeScreen } from '../pages/HomeScreen'
import { ContactPage } from '../pages/ContactPage'

export const pages: Page[] = [
    { path: '/', Component: <HomeScreen /> }
]

export const publicPages: Page[] = [
    { path: '/*', Component: <ContactPage /> }
]