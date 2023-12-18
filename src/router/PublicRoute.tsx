import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RootState } from '.././store';
import { PrivateRoute } from './PrivateRoute';
import { pages, publicPages } from '../router';
import { SearchComponent } from '../components/SearchComponent';
import { CategoriesComponent } from '../components/CategoriesComponent';

export const PublicRoute = () => {
    const { status } = useSelector((state: RootState) => state.auth);

    if (status === 'authenticated') {
        return (
            <PrivateRoute>
                <SearchComponent />
                <CategoriesComponent />
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
