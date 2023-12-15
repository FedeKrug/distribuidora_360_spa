import { Routes, Route } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<PublicRoute />} />
        </Routes>

    )
}
