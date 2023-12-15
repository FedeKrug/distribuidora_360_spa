import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RootState } from '.././store';
import { PrivateRoute } from './PrivateRoute';
import { pages, publicPages } from '../router';

export const PublicRoute = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    if (status === 'authenticated') {
        return (
            <PrivateRoute>
                <Routes>
                    {pages.map(({ Component, path }) =>
                        <Route key={path} element={Component} path={path} />)}
                </Routes>
            </PrivateRoute>
        )
    }

    return (
        <Routes>
            {publicPages.map(({ Component, path }) =>
                <Route key={path} element={Component} path={path} />)}
        </Routes>
    )
}
